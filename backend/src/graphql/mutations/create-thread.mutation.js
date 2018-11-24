import { GraphQLError, GraphQLString, GraphQLNonNull } from 'graphql';
import { ThreadType } from '../types/thread.type';
import { Response, UNEXPECTED_ERROR, MISSING_PARAMETERS } from '../utils/responses.utils';
import { string_to_slug } from '../utils/general.utils';

export const CreateThread = () => ({
  type: ThreadType,
  args: {
    community: { type: GraphQLString },
    slug: { type: GraphQLNonNull(GraphQLString) },
    title: { type: GraphQLNonNull(GraphQLString) },
    content: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (root, { community, slug, title, content }, ctx) => {
    const { headers, loaders, security, db } = ctx;
    return security.ensureAuthenticated(ctx.request.cookies.token).then(async authData => {
      if (!slug || slug === '' || !title || title === '' || !content || content === '') {
        return MISSING_PARAMETERS;
      }

      const possibleSlug = string_to_slug(title);
      let existentSlug;
      try {
        existentSlug = await db.thread.findOne({ slug: possibleSlug });
      } catch (error) {
        return UNEXPECTED_ERROR;
      }

      if (existentSlug) {
        return new GraphQLError(
          Response({
            status: 500,
            message: `A thread cannot be created with that name, there's already another thread like that`,
          }),
        );
      }

      let thread;
      let community;
      try {
        community = await db.community.findOne({ slug }).lean();
        thread = await db.thread.create({
          community: community._id.toString(),
          author: authData.identifier,
          title: title,
          content: content,
          slug: possibleSlug,
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
