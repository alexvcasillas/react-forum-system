import { GraphQLError, GraphQLString } from 'graphql';
import { UserType } from '../types/user.type';
import { Response, UNEXPECTED_ERROR, MISSING_PARAMETERS } from '../utils/responses.utils';

export const UpdatePassword = (security, db) => ({
  type: UserType,
  args: {
    password: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  resolve: (root, { password, newPassword }, { headers, token }) => {
    return security.ensureAuthenticated(token).then(async authData => {
      if (!password || password === '' || !newPassword || newPassword === '') {
        return MISSING_PARAMETERS;
      }
      if (password === newPassword) {
        return new GraphQLError(
          Response({
            status: 500,
            message: `The current password and the new one must be different`,
          }),
        );
      }
      let user;
      try {
        user = await db.user.findById(authData.identifier);
      } catch (error) {
        return UNEXPECTED_ERROR;
      }
      if (!user) return NOT_FOUND;
      let equalPasswords;
      try {
        equalPasswords = await user.comparePassword(newPassword);
      } catch (error) {
        return UNEXPECTED_ERROR;
      }
      if (equalPasswords) {
        return new GraphQLError(
          Response({
            status: 500,
            message: `The current password and the new one must be different`,
          }),
        );
      }
      user.password = newPassword;
      try {
        await user.save();
      } catch (error) {
        return new GraphQLError(
          Response({
            status: 500,
            message: `An error ocurred while updating the user.`,
          }),
        );
      }
      return user.toObject();
    }, security.onRejectedAuthentication);
  },
});
