import { GraphQLObjectType, GraphQLString } from 'graphql';

export const CommunityType = new GraphQLObjectType({
  name: 'Community',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString, resolve: community => community._id.toString() },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    picture: { type: GraphQLString },
    createdAt: { type: GraphQLString, resolve: community => community.createdAt.toString() },
    updatedAt: { type: GraphQLString, resolve: community => community.updatedAt.toString() },
  }),
});
