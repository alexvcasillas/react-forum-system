import { GraphQLObjectType, GraphQLString } from 'graphql';
import { UserType } from './user.type';
import { ThreadType } from './thread.type';

export const PostType = new GraphQLObjectType({
  name: 'Post',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString, resolve: post => post._id.toString() },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    thread: {
      type: ThreadType,
      resolve: async (post, args, { loaders }) => {
        return await loaders.thread.load(post.thread);
      },
    },
    author: {
      type: UserType,
      resolve: async (post, args, { loaders }) => {
        return await loaders.user.load(post.author);
      },
    },
    createdAt: { type: GraphQLString, resolve: post => post.createdAt.toString() },
    updatedAt: { type: GraphQLString, resolve: post => post.updatedAt.toString() },
  }),
});
