import { GraphQLList } from 'graphql';
import { CommunityType } from '../types/community.type';

export const CommunitiesQuery = (security, db) => ({
  type: GraphQLList(CommunityType),
  resolve: (root, args, { headers, loaders, token }) => {
    return security.ensureAuthenticated(token).then(async authData => {
      const communities = await db.community.find().lean();
      await loaders.community.cache(communities);
      return communities;
    }, security.onRejectedAuthentication);
  },
});
