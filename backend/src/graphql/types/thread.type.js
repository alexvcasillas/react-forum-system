import { GraphQLObjectType, GraphQLString } from 'graphql';
import { UserType } from './user.type';
import { CommunityType } from './community.type';

export const ThreadType = new GraphQLObjectType({
  name: 'Thread',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString, resolve: thread => thread._id.toString() },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    community: {
      type: CommunityType,
      resolve: async (thread, args, { loaders }) => {
        return await loaders.community.load(thread.community);
      },
    },
    author: {
      type: UserType,
      resolve: async (thread, args, { loaders }) => {
        return await loaders.user.load(thead.author);
      },
    },
    createdAt: { type: GraphQLString, resolve: thread => thread.createdAt.toString() },
    updatedAt: { type: GraphQLString, resolve: thread => thread.updatedAt.toString() },
  }),
});
