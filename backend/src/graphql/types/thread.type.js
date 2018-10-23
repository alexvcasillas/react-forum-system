import { GraphQLObjectType, GraphQLString } from 'graphql';
import { UserType } from './user.type';
import { ForumType } from './forum.type';

export const ThreadType = new GraphQLObjectType({
  name: 'Thread',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString, resolve: thread => thread._id.toString() },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    forum: {
      type: ForumType,
      resolve: async (thread, args, { loaders }) => {
        return await loaders.forum.load(thread.forum);
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
