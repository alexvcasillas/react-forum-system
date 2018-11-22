import { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt, GraphQLError } from 'graphql';
import { UserType } from './user.type';
import { CommunityType } from './community.type';
import { ReplyType } from './reply.type';

import { Response } from '../utils/responses.utils';

export const ThreadType = new GraphQLObjectType({
  name: 'Thread',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString, resolve: thread => thread._id.toString() },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    slug: { type: GraphQLString },
    community: {
      type: CommunityType,
      resolve: async (thread, args, { loaders }) => {
        return await loaders.community.load(thread.community);
      },
    },
    author: {
      type: UserType,
      resolve: async (thread, args, { loaders }) => {
        return await loaders.user.load(thread.author);
      },
    },
    replies_count: {
      type: GraphQLInt,
      resolve: async (thread, args, { loaders, db }) => {
        let replies_count;
        try {
          replies_count = await db.reply.countDocuments({ thread: thread._id.toString() });
        } catch (error) {
          return new GraphQLError(
            Response({ status: 500, message: `An error ocurred while getting community threads` }),
          );
        }
        return replies_count;
      },
    },
    replies: {
      type: GraphQLList(ReplyType),
      resolve: async (thread, args, { loaders, db }) => {
        let replies;
        try {
          replies = await db.reply.find({ thread: thread._id.toString() }).lean();
        } catch (error) {
          return new GraphQLError(Response({ status: 500, message: `An error ocurred while getting thread replies` }));
        }
        await loaders.reply.cache(replies);
        return replies;
      },
    },
    users_replying: {
      type: GraphQLInt,
      resolve: async (thread, args, { loaders, db }) => {
        let users;
        try {
          users = await db.reply
            .distinct('author', {
              thread: thread._id.toString(),
            })
            .lean();
        } catch (error) {
          return new GraphQLError(
            Response({
              status: 500,
              message: `An error ocurred while getting the amount of users replying to this thread`,
            }),
          );
        }
        const users_replying = users.filter(user => user.toString() !== thread.author.toString());
        return users_replying.length + 1;
      },
    },
    createdAt: { type: GraphQLString, resolve: thread => thread.createdAt.toString() },
    updatedAt: { type: GraphQLString, resolve: thread => thread.updatedAt.toString() },
  }),
});
