import { GraphQLObjectType, GraphQLString } from 'graphql';
import { UserType } from './user.type';
import { ThreadType } from './thread.type';

export const ReplyType = new GraphQLObjectType({
  name: 'Reply',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString, resolve: reply => reply._id.toString() },
    content: { type: GraphQLString },
    thread: {
      type: ThreadType,
      resolve: async (reply, args, { loaders }) => {
        return await loaders.thread.load(reply.thread);
      },
    },
    author: {
      type: UserType,
      resolve: async (reply, args, { loaders }) => {
        return await loaders.user.load(reply.author);
      },
    },
    createdAt: { type: GraphQLString, resolve: reply => reply.createdAt.toString() },
    updatedAt: { type: GraphQLString, resolve: reply => reply.updatedAt.toString() },
  }),
});
