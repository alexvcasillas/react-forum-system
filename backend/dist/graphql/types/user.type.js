"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserType = exports.RoleType = void 0;

var _graphql = require("graphql");

var RoleType = new _graphql.GraphQLEnumType({
  name: 'role',
  values: {
    ADMIN: {
      value: 'ADMIN'
    },
    USER: {
      value: 'USER'
    }
  }
});
exports.RoleType = RoleType;
var UserType = new _graphql.GraphQLObjectType({
  name: 'user',
  description: '...',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(user) {
          return user._id.toString();
        }
      },
      email: {
        type: _graphql.GraphQLString
      },
      password: {
        type: _graphql.GraphQLString
      },
      username: {
        type: _graphql.GraphQLString
      },
      name: {
        type: _graphql.GraphQLString
      },
      lastName: {
        type: _graphql.GraphQLString
      },
      avatar: {
        type: _graphql.GraphQLString
      },
      role: {
        type: RoleType
      },
      createdAt: {
        type: _graphql.GraphQLString,
        resolve: function resolve(user) {
          return user.createdAt.toString();
        }
      },
      updatedAt: {
        type: _graphql.GraphQLString,
        resolve: function resolve(user) {
          return user.updatedAt.toString();
        }
      },
      token: {
        type: _graphql.GraphQLString
      },
      accountDisabled: {
        type: _graphql.GraphQLBoolean
      }
    };
  }
});
exports.UserType = UserType;