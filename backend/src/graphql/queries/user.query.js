import { GraphQLString } from 'graphql';
import { UserType } from '../types/user.type';

export const UserQuery = () => ({
  type: UserType,
  args: {
    id: { type: GraphQLString },
  },
  resolve: (root, args, { headers, loaders, token, security }) => {
    return security.ensureAuthenticatedAdmin(token).then(async authData => {
      return loaders.user.load(args.id);
    }, security.onRejectedAuthentication);
  },
});
