"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticateMutation = void 0;

var _graphql = require("graphql");

var _user = require("../types/user.type");

var _responses = require("../utils/responses.utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var AuthenticateMutation = function AuthenticateMutation() {
  return {
    type: _user.UserType,
    args: {
      email: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      },
      password: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      }
    },
    resolve: function () {
      var _resolve = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(root, _ref, ctx) {
        var email, password, db, auth, user, equalPasswords, authToken;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                email = _ref.email, password = _ref.password;
                db = ctx.db, auth = ctx.auth;

                if (!(email === '' || password === '')) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", _responses.MISSING_PARAMETERS);

              case 4:
                _context.next = 6;
                return db.user.findOne({
                  email: email
                });

              case 6:
                user = _context.sent;

                if (user) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", _responses.NOT_FOUND);

              case 9:
                _context.next = 11;
                return user.comparePassword(password);

              case 11:
                equalPasswords = _context.sent;

                if (equalPasswords) {
                  _context.next = 14;
                  break;
                }

                return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                  status: 400,
                  message: 'Bad Request'
                })));

              case 14:
                _context.prev = 14;
                _context.next = 17;
                return auth.generateToken({
                  identifier: user._id,
                  email: user.email
                });

              case 17:
                authToken = _context.sent;
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](14);
                return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                  status: 500,
                  message: "An error ocurred while generating the authentication token for the user."
                })));

              case 23:
                ctx.response.cookie('token', authToken, {
                  httpOnly: true,
                  maxAge: 1000 * 60 * 60 * 24 * 365
                });
                return _context.abrupt("return", user.toObject());

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[14, 20]]);
      }));

      return function resolve(_x, _x2, _x3) {
        return _resolve.apply(this, arguments);
      };
    }()
  };
};

exports.AuthenticateMutation = AuthenticateMutation;