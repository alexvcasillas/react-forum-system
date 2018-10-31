import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLError, GraphQLList } from 'graphql';
import { Response } from '../utils/responses.utils';
import { ThreadType } from './thread.type';

export const CommunityType = new GraphQLObjectType({
  name: 'Community',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString, resolve: community => community._id.toString() },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    picture: { type: GraphQLString },
    createdAt: { type: GraphQLString, resolve: community => community.createdAt.toString() },
    updatedAt: { type: GraphQLString, resolve: community => community.updatedAt.toString() },
    likes: {
      type: GraphQLInt,
      resolve: async (community, args, { db }) => {
        return await db.community_likes.estimatedDocumentCount({ community: community._id.toString() });
      },
    },
    threads: {
      type: GraphQLList(ThreadType),
      resolve: async (community, args, { db }) => {
        let threads;
        try {
          threads = await db.thread.find({ community: community._id.toString() }).lean();
        } catch (error) {
          return new GraphQLError(
            Response({ status: 500, message: `An error ocurred while getting community threads` }),
          );
        }
        await loaders.thread.cache(threads);
        return threads;
      },
    },
    threads_count: {
      type: GraphQLInt,
      resolve: async (community, args, { db }) => {
        let threads_count;
        try {
          threads_count = await db.thread.estimatedDocumentCount({ community: community._id.toString() });
        } catch (error) {
          return new GraphQLError(
            Response({ status: 500, message: `An error ocurred while getting community threads` }),
          );
        }
        return threads_count;
      },
    },
  }),
});
