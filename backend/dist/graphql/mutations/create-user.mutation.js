"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateUser = void 0;

var _graphql = require("graphql");

var _user = require("../types/user.type");

var _responses = require("../utils/responses.utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CreateUser = function CreateUser() {
  return {
    type: _user.UserType,
    args: {
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
      }
    },
    resolve: function () {
      var _resolve = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(root, args, ctx) {
        var db, auth, exists, user, authToken;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                db = ctx.db, auth = ctx.auth;

                if (!(!args.email || args.email === '' || !args.password || args.password === '' || !args.username || args.username === '' || !args.name || args.name === '' || !args.lastName || args.lastName === '')) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", _responses.MISSING_PARAMETERS);

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return db.user.findOne({
                  email: args.email
                });

              case 6:
                exists = _context.sent;
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](3);
                return _context.abrupt("return", _responses.UNEXPECTED_ERROR);

              case 12:
                if (!exists) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                  status: 500,
                  message: "An account could not be created with the given data."
                })));

              case 14:
                _context.prev = 14;
                _context.next = 17;
                return db.user.create({
                  email: args.email,
                  password: args.password,
                  username: args.username,
                  name: args.name,
                  lastName: args.lastName
                });

              case 17:
                user = _context.sent;
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t1 = _context["catch"](14);
                return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                  status: 500,
                  message: "An error ocurred while creating the account."
                })));

              case 23:
                _context.prev = 23;
                _context.next = 26;
                return auth.generateToken({
                  identifier: user._id,
                  email: user.email
                });

              case 26:
                authToken = _context.sent;
                _context.next = 32;
                break;

              case 29:
                _context.prev = 29;
                _context.t2 = _context["catch"](23);
                return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                  status: 500,
                  message: "An error ocurred while generating the authentication token for the user."
                })));

              case 32:
                ctx.response.cookie('token', authToken, {
                  httpOnly: true,
                  maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year

                });
                return _context.abrupt("return", user.toObject());

              case 34:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 9], [14, 20], [23, 29]]);
      }));

      return function resolve(_x, _x2, _x3) {
        return _resolve.apply(this, arguments);
      };
    }()
  };
};

exports.CreateUser = CreateUser;