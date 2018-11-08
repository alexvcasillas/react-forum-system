import { GraphQLError, GraphQLString, GraphQLNonNull } from 'graphql';
import { ThreadType } from '../types/thread.type';
import { Response, UNEXPECTED_ERROR, MISSING_PARAMETERS } from '../utils/responses.utils';

export const CreateThread = () => ({
  type: ThreadType,
  args: {
    community: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (root, { community, title, content }, ctx) => {
    const { headers, loaders, security, db } = ctx;
    return security.ensureAuthenticated(ctx.request.cookies.token).then(async authData => {
      if (!community || community === '' || !title || title === '' || !content || content === '') {
        return MISSING_PARAMETERS;
      }
      let thread;
      try {
        thread = await db.thread.create({
          community: community,
          author: authData.identifier,
          title: title,
          content: content,
        });
      } catch (error) {
        return GraphQLError(
          Response({
            status: 500,
            message: `An error ocurred while creating the thread.`,
          }),
        );
      }
      return thread.toObject();
    }, security.onRejectedAuthentication);
  },
});
