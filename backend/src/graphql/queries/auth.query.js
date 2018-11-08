import { UserType } from '../types/user.type';

export const AuthQuery = () => ({
  type: UserType,
  resolve: (root, args, ctx) => {
    const { security, loaders } = ctx;
    return security.ensureAuthenticated(ctx.request.authorization).then(
      async authData => {
        return await loaders.user.load(authData.identifier);
      },
      () => null,
    );
  },
});
