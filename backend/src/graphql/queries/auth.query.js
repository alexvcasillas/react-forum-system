import { UserType } from '../types/user.type';

export const AuthQuery = () => ({
  type: UserType,
  resolve: (root, args, ctx) => {
    const { security, loaders } = ctx;
    console.log('Token: ', ctx.request.cookies.token);
    return security.ensureAuthenticated(ctx.request.cookies.token).then(
      async authData => {
        return await loaders.user.load(authData.identifier);
      },
      () => null,
    );
  },
});
