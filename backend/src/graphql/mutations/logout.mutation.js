import { GraphQLBoolean } from 'graphql';
import { UserType } from '../types/user.type';
import { Response, NOT_FOUND, MISSING_PARAMETERS } from '../utils/responses.utils';

export const LogoutMutation = () => ({
  type: GraphQLBoolean,
  resolve: (root, args, ctx) => {
    const { security } = ctx;
    return security.ensureAuthenticated(ctx.request.authorization).then(async authData => {
      ctx.response.clearCookie('token');
      return true;
    }, security.onRejectedAuthentication);
  },
});