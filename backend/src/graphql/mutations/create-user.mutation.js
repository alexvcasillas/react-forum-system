import { GraphQLError, GraphQLString } from 'graphql';
import { UserType } from '../types/user.type';
import { Response, UNEXPECTED_ERROR, MISSING_PARAMETERS } from '../utils/responses.utils';

export const CreateUser = (security, db, auth) => ({
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    username: { type: GraphQLString },
  },
  resolve: async (root, args, { cookie }) => {
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
    cookie('token', authToken, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year
    });
    return user.toObject();
  },
});
