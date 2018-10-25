import { GraphQLList } from 'graphql';
import { UserType } from '../types/user.type';

export const UsersQuery = (security, db) => ({
  type: GraphQLList(UserType),
  resolve: (root, args, { headers, loaders }) => {
    return security.ensureAuthenticatedAdmin(headers).then(async authData => {
      const users = await db.user.find().lean();
      await loaders.user.cache(users);
      return users;
    }, security.onRejectedAuthentication);
  },
});
