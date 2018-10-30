import { GraphQLError, GraphQLString } from 'graphql';
import { UserType } from '../types/user.type';
import { Response, UNEXPECTED_ERROR } from '../utils/responses.utils';

export const UpdateUser = (security, db) => ({
  type: UserType,
  args: {
    name: { type: GraphQLString },
    lastName: { type: GraphQLString },
    avatar: { type: GraphQLString },
  },
  resolve: (root, { name, lastName, avatar }, { headers, token }) => {
    return security.ensureAuthenticated(token).then(async authData => {
      let user;
      try {
        user = await db.user.findById(authData.identifier);
      } catch (error) {
        return UNEXPECTED_ERROR;
      }
      let changes = false;
      if (name && name !== '' && user.name !== name) {
        user.name = name;
        changes = true;
      }
      if (lastName && lastName !== '' && user.lastName !== lastName) {
        user.lastName = lastName;
        changes = true;
      }
      if (avatar && avatar !== '' && user.avatar !== avatar) {
        user.avatar = avatar;
        changes = true;
      }
      if (!changes) return user;
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
