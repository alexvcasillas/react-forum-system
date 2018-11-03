import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLEnumType } from 'graphql';

export const RoleType = new GraphQLEnumType({
  name: 'role',
  values: {
    ADMIN: { value: 'ADMIN' },
    USER: { value: 'USER' },
  },
});

export const UserType = new GraphQLObjectType({
  name: 'user',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString, resolve: user => user._id.toString() },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    username: { type: GraphQLString },
    name: { type: GraphQLString },
    lastName: { type: GraphQLString },
    avatar: { type: GraphQLString },
    role: { type: RoleType },
    createdAt: { type: GraphQLString, resolve: user => user.createdAt.toString() },
    updatedAt: { type: GraphQLString, resolve: user => user.updatedAt.toString() },
    token: { type: GraphQLString },
    accountDisabled: { type: GraphQLBoolean },
  }),
});
