import { GraphQLError, GraphQLString, GraphQLNonNull } from 'graphql';
import { CommunityType } from '../types/community.type';
import { Response, UNEXPECTED_ERROR, MISSING_PARAMETERS } from '../utils/responses.utils';

export const CreateCommunity = (security, db, auth) => ({
  type: CommunityType,
  args: {
    title: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    picture: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (root, { title, description, picture }, { headers, loaders, token }) => {
    return security.ensureAuthenticated(token).then(async authData => {
      if (!title || title === '' || !description || description === '' || !picture || picture === '') {
        return MISSING_PARAMETERS;
      }
      let exists;
      try {
        exists = await db.community.findOne({ title: title });
      } catch (error) {
        return UNEXPECTED_ERROR;
      }
      if (exists) {
        return new GraphQLError(Response({ status: 500, message: `A community already exists with that name.` }));
      }
      let community;
      try {
        community = await db.community.create({ title: title, description: description, picture: picture });
      } catch (error) {
        return new GraphQLError(
          Response({
            status: 500,
            message: `An error ocurred while creating the community.`,
          }),
        );
      }
      return community.toObject();
    }, security.onRejectedAuthentication);
  },
});
