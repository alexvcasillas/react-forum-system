import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLError,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLEnumType,
} from 'graphql';
import { equal } from 'assert';

import { UserType } from './types/user.type';
import { CategoryType } from './types/category.type';
import { ForumType } from './types/forum.type';
import { ThreadType } from './types/thread.type';
import { PostType } from './types/post.type';

/* Returns Stringified response object for the GraphQL formatError function */
const Response = ({ status, message }) => JSON.stringify({ status, message });

/* Missing Parameters Response */
const MISSING_PARAMETERS = new GraphQLError(
  Response({
    status: 400,
    message: `Missing parameters`,
  }),
);

/* Unexpected Error Response */
const UNEXPECTED_ERROR = new GraphQLError(
  Response({ status: 500, message: `An unexpected error ocurred, please try again later.` }),
);

/* Not Found Response */
const NOT_FOUND = new GraphQLError(
  Response({ status: 404, message: `The resource you're looking for doesn't exists.` }),
);

/* Returns a Not Authorized Response */
const onRejectedAuthentication = () => new GraphQLError(Response({ status: 401, message: 'Not Authorized' }));

/**
 * GraphQL Service
 * @param {Object} An object containing: Configuration, Authentication Service and Mongoose DB Access Layer
 */
const GraphQLService = ({ config, auth, db }) => {
  /**
   * This method ensures that the request is
   * authenticated and valid by getting the headers of the HTTP Request
   * and then verifying the JSON Web Token.
   * @param {Object} HTTP Request Headers
   * @returns {Object} Authentication Object contained within the JWT
   */
  const ensureAuthenticated = (headers = {}) =>
    new Promise(async (resolve, reject) => {
      if (!headers.hasOwnProperty('authorization')) {
        return reject(false);
      }
      const [type, token] = [...headers.authorization.split(' ')];
      if (type !== 'Bearer') {
        return reject(false);
      }
      let verificationResult;
      try {
        verificationResult = await auth.verifyToken(token);
      } catch (error) {
        return reject(false);
      }
      return resolve(verificationResult);
    });

  /**
   * This method ensures that the request is
   * authenticated and valid by getting the headers of the HTTP Request
   * and then verifying the JSON Web Token and also check for an ADMIN role account.
   * @param {Object} HTTP Request Headers
   * @returns {Object} Authentication Object contained within the JWT
   */
  const ensureAuthenticatedAdmin = (headers = {}) =>
    new Promise(async (resolve, reject) => {
      if (!headers.hasOwnProperty('authorization')) {
        return reject(false);
      }
      const [type, token] = [...headers.authorization.split(' ')];
      if (type !== 'Bearer') {
        return reject(false);
      }
      let verificationResult;
      try {
        verificationResult = await auth.verifyToken(token);
      } catch (error) {
        return reject(false);
      }
      // Verify here for ADMIN permissions
      const admin = await db.user.find({ token: token }).lean();
      if (admin) return resolve(verificationResult);
      else return reject(false);
    });

  /**
   * Object for the GraphQL Query Layer
   */
  const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      // ADMIN FIELDS
      user: {
        type: UserType,
        args: {
          id: { type: GraphQLString },
        },
        resolve: (root, args, { headers, loaders }) => {
          return ensureAuthenticatedAdmin(headers).then(async authData => {
            return loaders.user.load(args.id);
          }, onRejectedAuthentication);
        },
      },
      users: {
        type: GraphQLList(UserType),
        resolve: (root, args, { headers, loaders }) => {
          return ensureAuthenticatedAdmin(headers).then(async authData => {
            const users = await db.user.find().lean();
            await loaders.user.cache(users);
            return users;
          }, onRejectedAuthentication);
        },
      },
      authenticate: {
        type: UserType,
        args: {
          email: { type: GraphQLNonNull(GraphQLString) },
          password: { type: GraphQLNonNull(GraphQLString) },
        },
        resolve: async (root, { email, password }, { headers, loaders }) => {
          if (email === '' || password === '') return MISSING_PARAMETERS;
          const user = await db.user.findOne({ email });
          if (!user) return NOT_FOUND;
          const equalPasswords = await user.comparePassword(password);
          if (!equalPasswords) return new GraphQLError(Response({ status: 400, message: 'Bad Request' }));
          return user.toObject();
        },
      },
    }),
  });

  /**
   * Object for the GraphQL Mutation layer
   */
  const MutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: '...',

    fields: () => ({
      /* Creation Mutations  */
      createUser: {
        type: UserType,
        args: {
          email: { type: GraphQLString },
          password: { type: GraphQLString },
          username: { type: GraphQLString },
        },
        resolve: async (root, args, context) => {
          if (
            !args.email ||
            args.email === '' ||
            !args.password ||
            args.password === '' ||
            !args.username ||
            args.username === ''
          ) {
            return MISSING_PARAMETERS;
          }
          let exists;
          try {
            exists = await db.user.findOne({ email: args.email });
          } catch (error) {
            return UNEXPECTED_ERROR;
          }
          if (exists) {
            return new GraphQLError(
              Response({ status: 500, message: `An account could not be created with the given data.` }),
            );
          }
          let user;
          try {
            user = await db.user.create({
              email: args.email,
              password: args.password,
              username: args.username,
            });
          } catch (error) {
            return new GraphQLError(
              Response({
                status: 500,
                message: `An error ocurred while creating the account.`,
              }),
            );
          }
          let authToken;
          try {
            authToken = await auth.generateToken({ identifier: user._id, email: user.email });
          } catch (error) {
            return new GraphQLError(
              Response({
                status: 500,
                message: `An error ocurred while generating the authentication token for the user.`,
              }),
            );
          }
          user.token = authToken;
          try {
            await user.save();
          } catch (error) {
            return new GraphQLError(
              Response({
                status: 500,
                message: `An error ocurred while settings the authentication token to the user.`,
              }),
            );
          }
          return user.toObject();
        },
      },
      /* Update Mutations */
      updateUser: {
        type: UserType,
        args: {
          name: { type: GraphQLString },
          lastName: { type: GraphQLString },
          avatar: { type: GraphQLString },
        },
        resolve: (root, { name, lastName, avatar }, { headers }) => {
          return ensureAuthenticated(headers).then(async authData => {
            let user;
            try {
              user = await db.user.findById(authData.identifier);
            } catch (error) {
              return UNEXPECTED_ERROR;
            }
            let changes = false;
            if (name && name !== '' && user.name !== name) {
              user.name = name;
              changes = true;
            }
            if (lastName && lastName !== '' && user.lastName !== lastName) {
              user.lastName = lastName;
              changes = true;
            }
            if (avatar && avatar !== '' && user.avatar !== avatar) {
              user.avatar = avatar;
              changes = true;
            }
            if (!changes) return user;
            try {
              await user.save();
            } catch (error) {
              return new GraphQLError(
                Response({
                  status: 500,
                  message: `An error ocurred while updating the user.`,
                }),
              );
            }
            return user.toObject();
          }, onRejectedAuthentication);
        },
      },
      updatePassword: {
        type: UserType,
        args: {
          password: { type: GraphQLString },
          newPassword: { type: GraphQLString },
        },
        resolve: (root, { password, newPassword }, { headers }) => {
          return ensureAuthenticated(headers).then(async authData => {
            if (!password || password === '' || !newPassword || newPassword === '') {
              return MISSING_PARAMETERS;
            }
            if (password === newPassword) {
              return new GraphQLError(
                Response({
                  status: 500,
                  message: `The current password and the new one must be different`,
                }),
              );
            }
            let user;
            try {
              user = await db.user.findById(authData.identifier);
            } catch (error) {
              return UNEXPECTED_ERROR;
            }
            if (!user) return NOT_FOUND;
            let equalPasswords;
            try {
              equalPasswords = await user.comparePassword(newPassword);
            } catch (error) {
              return UNEXPECTED_ERROR;
            }
            if (equalPasswords) {
              return new GraphQLError(
                Response({
                  status: 500,
                  message: `The current password and the new one must be different`,
                }),
              );
            }
            user.password = newPassword;
            try {
              await user.save();
            } catch (error) {
              return new GraphQLError(
                Response({
                  status: 500,
                  message: `An error ocurred while updating the user.`,
                }),
              );
            }
            return user.toObject();
          }, onRejectedAuthentication);
        },
      },
      /* Delete Mutations */
    }),
  });

  return new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
  });
};

export { GraphQLService };
