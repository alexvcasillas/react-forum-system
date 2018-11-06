import { GraphQLError, GraphQLString, GraphQLNonNull } from 'graphql';
import { CommunityType } from '../types/community.type';
import { Response, UNEXPECTED_ERROR, MISSING_PARAMETERS } from '../utils/responses.utils';

export const CreateCommunity = () => ({
  type: CommunityType,
  args: {
    name: { type: GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLNonNull(GraphQLString) },
    picture: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: (root, { name, description, picture }, ctx) => {
    const { headers, loaders, security, db } = ctx;
    return security.ensureAuthenticated(ctx.request.cookies.token).then(async authData => {
      if (!name || name === '' || !description || description === '' || !picture || picture === '') {
        return MISSING_PARAMETERS;
      }
      let exists;
      try {
        exists = await db.community.findOne({ name: name });
      } catch (error) {
        return UNEXPECTED_ERROR;
      }
      if (exists) {
        return new GraphQLError(Response({ status: 500, message: `A community already exists with that name.` }));
      }
      let community;
      try {
        community = await db.community.create({ name: name, description: description, picture: picture });
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
