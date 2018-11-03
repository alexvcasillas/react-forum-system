import { UserType } from '../types/user.type';

export const AuthQuery = () => ({
  type: UserType,
  resolve: (root, args, { headers, loaders, token, security, db }) => {
    return security.ensureAuthenticated(token).then(async authData => {
      return await loaders.user.load(authData.identifier);
    }, security.onRejectedAuthentication);
  },
});
