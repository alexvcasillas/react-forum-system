import { GraphQLString, GraphQLNonNull } from 'graphql';
import { CommunityType } from '../types/community.type';

export const CommunityQuery = () => ({
  type: CommunityType,
  args: {
    id: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (root, { id }, { headers, loaders, token, security, db }) => {
    return security.ensureAuthenticated(token).then(async authData => {
      return await loaders.community.load(id);
    }, security.onRejectedAuthentication);
  },
});
