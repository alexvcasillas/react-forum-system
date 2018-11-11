"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NOT_FOUND = exports.UNEXPECTED_ERROR = exports.MISSING_PARAMETERS = exports.Response = void 0;

var _graphql = require("graphql");

/* Returns Stringified response object for the GraphQL formatError function */
var Response = function Response(_ref) {
  var status = _ref.status,
      message = _ref.message;
  return JSON.stringify({
    status: status,
    message: message
  });
};
/* Missing Parameters Response */


exports.Response = Response;
var MISSING_PARAMETERS = new _graphql.GraphQLError(Response({
  status: 400,
  message: "Missing parameters"
}));
/* Unexpected Error Response */

exports.MISSING_PARAMETERS = MISSING_PARAMETERS;
var UNEXPECTED_ERROR = new _graphql.GraphQLError(Response({
  status: 500,
  message: "An unexpected error ocurred, please try again later."
}));
/* Not Found Response */

exports.UNEXPECTED_ERROR = UNEXPECTED_ERROR;
var NOT_FOUND = new _graphql.GraphQLError(Response({
  status: 404,
  message: "The resource you're looking for doesn't exists."
}));
exports.NOT_FOUND = NOT_FOUND;