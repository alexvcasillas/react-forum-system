"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLService = void 0;

var _graphql = require("graphql");

var _assert = require("assert");

var _auth = require("./queries/auth.query");

var _user = require("./queries/user.query");

var _users = require("./queries/users.query");

var _community = require("./queries/community.query");

var _communities = require("./queries/communities.query");

var _threadsByCommunity = require("./queries/threads-by-community.query");

var _thread = require("./queries/thread.query");

var _repliesByThread = require("./queries/replies-by-thread.query");

var _authenticate = require("./mutations/authenticate.mutation");

var _logout = require("./mutations/logout.mutation");

var _createUser = require("./mutations/create-user.mutation");

var _updateUser = require("./mutations/update-user.mutation");

var _updatePassword = require("./mutations/update-password.mutation");

var _createCommunity = require("./mutations/create-community.mutation");

var _createThread = require("./mutations/create-thread.mutation");

var _createReply = require("./mutations/create-reply.mutation");

// QUERIES
// MUTATIONS

/**
 * GraphQL Service
 * @param {Object} An object containing: Configuration, Authentication Service and Mongoose DB Access Layer
 */
var GraphQLService = function GraphQLService() {
  /**
   * Object for the GraphQL Query Layer
   */
  var QueryType = new _graphql.GraphQLObjectType({
    name: 'Query',
    description: '...',
    fields: function fields() {
      return {
        auth: (0, _auth.AuthQuery)(),
        user: (0, _user.UserQuery)(),
        users: (0, _users.UsersQuery)(),
        community: (0, _community.CommunityQuery)(),
        communities: (0, _communities.CommunitiesQuery)(),
        threadsByCommunity: (0, _threadsByCommunity.ThreadsByCommunityQuery)(),
        thread: (0, _thread.ThreadQuery)(),
        repliesByThread: (0, _repliesByThread.RepliesByThreadQuery)()
      };
    }
  });
  /**
   * Object for the GraphQL Mutation layer
   */

  var MutationType = new _graphql.GraphQLObjectType({
    name: 'Mutation',
    description: '...',
    fields: function fields() {
      return {
        /* Creation Mutations  */
        authenticate: (0, _authenticate.AuthenticateMutation)(),
        logout: (0, _logout.LogoutMutation)(),
        createUser: (0, _createUser.CreateUser)(),
        createCommunity: (0, _createCommunity.CreateCommunity)(),
        createThread: (0, _createThread.CreateThread)(),
        createReply: (0, _createReply.CreateReply)(),

        /* Update Mutations */
        updateUser: (0, _updateUser.UpdateUser)(),
        updatePassword: (0, _updatePassword.UpdatePassword)()
        /* Delete Mutations */

      };
    }
  });
  return new _graphql.GraphQLSchema({
    query: QueryType,
    mutation: MutationType
  });
};

exports.GraphQLService = GraphQLService;