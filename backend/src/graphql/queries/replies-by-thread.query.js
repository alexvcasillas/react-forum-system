import { GraphQLList, GraphQLNonNull, GraphQLString, GraphQLError } from 'graphql';
import { Response } from '../utils/responses.utils';
import { PostType } from '../types/post.type';

export const PostsByThreadQuery = () => ({
  type: GraphQLList(PostType),
  args: {
    thread: { type: GraphQLNonNull(GraphQLString) },
  },
  resolve: async (root, { community }, { headers, loaders, token, security, db }) => {
    let posts;
    try {
      posts = await db.thread.find({ thread }).lean();
    } catch (error) {
      return new GraphQLError(
        Response({
          status: 500,
          message: `An error ocurred while retrieving this thread posts.`,
        }),
      );
    }
    await loaders.post.cache(posts);
    return posts;
  },
});
