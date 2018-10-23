import { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLEnumType } from 'graphql';

const RoleType = new GraphQLEnumType({
  name: 'role',
  values: {
    ADMIN: { value: 'ADMIN' },
    CLIENT: { value: 'CLIENT' },
  },
});

export const UserType = new GraphQLObjectType({
  name: 'user',
  description: '...',

  fields: () => ({
    id: { type: GraphQLString, resolve: user => user._id.toString() },
    dni: { type: GraphQLString },
    name: { type: GraphQLString },
    lastName: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    avatar: { type: GraphQLString },
    role: { type: RoleType },
    createdAt: { type: GraphQLString, resolve: user => user.createdAt.toString() },
    updatedAt: { type: GraphQLString, resolve: user => user.updatedAt.toString() },
    token: { type: GraphQLString },
    accountDisabled: { type: GraphQLBoolean },
  }),
});
