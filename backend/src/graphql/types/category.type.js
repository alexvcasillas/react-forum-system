import { GraphQLObjectType, GraphQLString } from 'graphql';

export const CategoryType = new GraphQLObjectType({
  name: 'Category',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString, resolve: category => category._id.toString() },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    createdAt: { type: GraphQLString, resolve: category => category.createdAt.toString() },
    updatedAt: { type: GraphQLString, resolve: category => category.updatedAt.toString() },
  }),
});
