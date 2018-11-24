import { GraphQLNonNull, GraphQLString, GraphQLError } from 'graphql';
import { Response } from '../utils/responses.utils';
import { ThreadType } from '../types/thread.type';

export const ThreadQuery = () => ({
  type: ThreadType,
  args: {
    id: { type: GraphQLString },
    slug: { type: GraphQLString },
  },
  resolve: async (root, { id, slug }, { headers, loaders, token, security, db }) => {
    // return security.ensureAuthenticated(token).then(async authData => {
    if (id) return await loaders.thread.load(id);
    if (slug) return await db.thread.findOne({ slug }).lean();
    // }, security.onRejectedAuthentication);
  },
});
