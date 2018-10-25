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

// QUERIES
import { UserQuery } from './queries/user.query';
import { UsersQuery } from './queries/users.query';
import { AuthenticateQuery } from './queries/authenticate.query';
// MUTATIONS
import { CreateUser } from './mutations/create-user.mutation';
import { UpdateUser } from './mutations/update-user.mutation';
import { UpdatePassword } from './mutations/update-password.mutation';
// SECURITY
import { Security } from './security/security';

/**
 * GraphQL Service
 * @param {Object} An object containing: Configuration, Authentication Service and Mongoose DB Access Layer
 */
const GraphQLService = ({ config, auth, db }) => {
  // Import the Secutiry Stuff for Queries and Mutations
  const security = Security(db, auth);

  /**
   * Object for the GraphQL Query Layer
   */
  const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      user: UserQuery(security),
      users: UsersQuery(security, db),
      authenticate: AuthenticateQuery(security, db),
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
      createUser: CreateUser(security, db, auth),
      /* Update Mutations */
      updateUser: UpdateUser(security, db),
      updatePassword: UpdatePassword(security, db),
      /* Delete Mutations */
    }),
  });

  return new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
  });
};

export { GraphQLService };
