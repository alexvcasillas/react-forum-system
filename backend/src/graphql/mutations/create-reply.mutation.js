import { GraphQLError, GraphQLString, GraphQLNonNull } from 'graphql';
import { ReplyType } from '../types/reply.type';
import { Response, UNEXPECTED_ERROR, MISSING_PARAMETERS } from '../utils/responses.utils';

export const CreateReply = () => ({
  type: ReplyType,
  args: {
    thread: { type: GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (root, { thread, content }, ctx) => {
    const { headers, loaders, security, db } = ctx;
    return security.ensureAuthenticated(ctx.request.cookies.token).then(async authData => {
      console.log({ thread, content });
      if (!thread || thread === '' || !content || content === '') {
        return MISSING_PARAMETERS;
      }
      let reply;
      try {
        reply = await db.reply.create({
          thread: thread,
          author: authData.identifier,
          content: content,
        });
      } catch (error) {
        return GraphQLError(
          Response({
            status: 500,
            message: `An error ocurred while creating the reply.`,
          }),
        );
      }
      return reply.toObject();
    }, security.onRejectedAuthentication);
  },
});
