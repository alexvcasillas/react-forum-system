import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { UserType } from './user.type';
import { CommunityType } from './community.type';
import { ReplyType } from './reply.type';

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
        return await loaders.user.load(thread.author);
      },
    },
    replies: {
      type: GraphQLList(ReplyType),
      resolve: async (thread, args, { loaders, db }) => {
        let replies;
        try {
          replies = await db.reply.find({ thread: thread._id.toString() }).lean();
        } catch (error) {
          return new GraphQLError(Response({ status: 500, message: `An error ocurred while getting thread replies` }));
        }
        await loaders.reply.cache(replies);
        return replies;
      },
    },
    createdAt: { type: GraphQLString, resolve: thread => thread.createdAt.toString() },
    updatedAt: { type: GraphQLString, resolve: thread => thread.updatedAt.toString() },
  }),
});
