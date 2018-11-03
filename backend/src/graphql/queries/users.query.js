import { GraphQLList } from 'graphql';
import { UserType } from '../types/user.type';

export const UsersQuery = () => ({
  type: GraphQLList(UserType),
  resolve: async (root, args, { headers, loaders, token, security, db }) => {
    // return security.ensureAuthenticatedAdmin(token).then(async authData => {
    const users = await db.user.find().lean();
    await loaders.user.cache(users);
    return users;
    // }, security.onRejectedAuthentication);
  },
});
