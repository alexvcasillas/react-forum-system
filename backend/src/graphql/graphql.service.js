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
import { AuthQuery } from './queries/auth.query';
import { UserQuery } from './queries/user.query';
import { UsersQuery } from './queries/users.query';
import { CommunityQuery } from './queries/community.query';
import { CommunitiesQuery } from './queries/communities.query';
import { ThreadsByCommunityQuery } from './queries/threads-by-community.query';
// MUTATIONS
import { AuthenticateMutation } from './mutations/authenticate.mutation';
import { CreateUser } from './mutations/create-user.mutation';
import { UpdateUser } from './mutations/update-user.mutation';
import { UpdatePassword } from './mutations/update-password.mutation';
import { CreateCommunity } from './mutations/create-community.mutation';
import { CreateThread } from './mutations/create-thread.mutation';

/**
 * GraphQL Service
 * @param {Object} An object containing: Configuration, Authentication Service and Mongoose DB Access Layer
 */
const GraphQLService = () => {
  /**
   * Object for the GraphQL Query Layer
   */
  const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      auth: AuthQuery(),
      user: UserQuery(),
      users: UsersQuery(),
      community: CommunityQuery(),
      communities: CommunitiesQuery(),
      threadsByCommunity: ThreadsByCommunityQuery(),
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
      authenticate: AuthenticateMutation(),
      createUser: CreateUser(),
      createCommunity: CreateCommunity(),
      createThread: CreateThread(),
      /* Update Mutations */
      updateUser: UpdateUser(),
      updatePassword: UpdatePassword(),
      /* Delete Mutations */
    }),
  });

  return new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
  });
};

export { GraphQLService };
