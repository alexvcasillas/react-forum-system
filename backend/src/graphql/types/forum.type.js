import { GraphQLObjectType, GraphQLString } from 'graphql';
import { CategoryType } from './category.type';

export const ForumType = new GraphQLObjectType({
  name: 'Forum',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString, resolve: forum => forum._id.toString() },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    category: {
      type: CategoryType,
      resolve: async (forum, args, { loaders }) => {
        return await loaders.forum.load(forum.category);
      },
    },
    createdAt: { type: GraphQLString, resolve: forum => forum.createdAt.toString() },
    updatedAt: { type: GraphQLString, resolve: forum => forum.updatedAt.toString() },
  }),
});
