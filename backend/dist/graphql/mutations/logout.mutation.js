"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogoutMutation = void 0;

var _graphql = require("graphql");

var _user = require("../types/user.type");

var _responses = require("../utils/responses.utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var LogoutMutation = function LogoutMutation() {
  return {
    type: _graphql.GraphQLBoolean,
    resolve: function resolve(root, args, ctx) {
      var security = ctx.security;
      return security.ensureAuthenticated(ctx.request.authorization).then(
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(authData) {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  ctx.response.clearCookie('token');
                  return _context.abrupt("return", true);

                case 2:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }(), security.onRejectedAuthentication);
    }
  };
};

exports.LogoutMutation = LogoutMutation;