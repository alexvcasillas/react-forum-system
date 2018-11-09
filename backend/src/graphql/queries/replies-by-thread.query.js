import { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLError } from 'graphql';
import { Response } from '../utils/responses.utils';
import { ReplyType } from '../types/reply.type';

export const RepliesByThreadQuery = () => ({
  type: GraphQLList(ReplyType),
  args: {
    thread: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (root, { thread }, { headers, loaders, token, security, db }) => {
    let replies;
    try {
      replies = await db.reply.find({ thread }).lean();
    } catch (error) {
      return new GraphQLError(
        Response({
          status: 500,
          message: `An error ocurred while retrieving this thread replies.`,
        }),
      );
    }
    await loaders.reply.cache(replies);
    return replies;
  },
});
