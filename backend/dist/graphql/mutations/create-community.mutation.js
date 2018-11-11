"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateCommunity = void 0;

var _graphql = require("graphql");

var _community = require("../types/community.type");

var _responses = require("../utils/responses.utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CreateCommunity = function CreateCommunity() {
  return {
    type: _community.CommunityType,
    args: {
      name: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      },
      description: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      },
      picture: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      }
    },
    resolve: function resolve(root, _ref, ctx) {
      var name = _ref.name,
          description = _ref.description,
          picture = _ref.picture;
      var headers = ctx.headers,
          loaders = ctx.loaders,
          security = ctx.security,
          db = ctx.db;
      return security.ensureAuthenticated(ctx.request.cookies.token).then(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(authData) {
          var exists, community;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!name || name === '' || !description || description === '' || !picture || picture === '')) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", _responses.MISSING_PARAMETERS);

                case 2:
                  _context.prev = 2;
                  _context.next = 5;
                  return db.community.findOne({
                    name: name
                  });

                case 5:
                  exists = _context.sent;
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](2);
                  return _context.abrupt("return", _responses.UNEXPECTED_ERROR);

                case 11:
                  if (!exists) {
                    _context.next = 13;
                    break;
                  }

                  return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                    status: 500,
                    message: "A community already exists with that name."
                  })));

                case 13:
                  _context.prev = 13;
                  _context.next = 16;
                  return db.community.create({
                    name: name,
                    description: description,
                    picture: picture
                  });

                case 16:
                  community = _context.sent;
                  _context.next = 22;
                  break;

                case 19:
                  _context.prev = 19;
                  _context.t1 = _context["catch"](13);
                  return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                    status: 500,
                    message: "An error ocurred while creating the community."
                  })));

                case 22:
                  return _context.abrupt("return", community.toObject());

                case 23:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[2, 8], [13, 19]]);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(), security.onRejectedAuthentication);
    }
  };
};

exports.CreateCommunity = CreateCommunity;