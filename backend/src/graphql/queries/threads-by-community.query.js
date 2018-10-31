import { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLError } from 'graphql';
import { Response } from '../utils/responses.utils';
import { ThreadType } from '../types/thread.type';

export const ThreadsByCommunityQuery = () => ({
  type: GraphQLList(ThreadType),
  args: {
    community: { type: GraphQLNonNull(GraphQLString) },
    filter: { type: GraphQLString },
  },
  resolve: (root, { community, filter = '' }, { headers, loaders, token, security, db }) => {
    return security.ensureAuthenticated(token).then(async authData => {
      let threads;
      try {
        threads = await db.thread.find({ community, title: { $regex: filter, $options: 'i' } }).lean();
      } catch (error) {
        return new GraphQLError(
          Response({
            status: 500,
            message: `An error ocurred while retrieving this community threads.`,
          }),
        );
      }
      await loaders.thread.cache(threads);
      return threads;
    }, security.onRejectedAuthentication);
  },
});
