import { GraphQLString, GraphQLNonNull } from 'graphql';
import { CommunityType } from '../types/community.type';

export const CommunityQuery = () => ({
  type: CommunityType,
  args: {
    id: { type: GraphQLString },
    slug: { type: GraphQLString },
  },
  resolve: async (root, { id, slug }, { headers, loaders, token, security, db }) => {
    // return security.ensureAuthenticated(token).then(async authData => {
    if (id) return await loaders.community.load(id);
    if (slug) return await db.community.findOne({ slug }).lean();
    // }, security.onRejectedAuthentication);
  },
});
