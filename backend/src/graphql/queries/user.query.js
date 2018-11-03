import { GraphQLString } from 'graphql';
import { UserType } from '../types/user.type';

export const UserQuery = () => ({
  type: UserType,
  args: {
    id: { type: GraphQLString },
  },
  resolve: async (root, args, { headers, loaders, token, security }) => {
    // return security.ensureAuthenticatedAdmin(token).then(async authData => {
    return await loaders.user.load(args.id);
    // }, security.onRejectedAuthentication);
  },
});
