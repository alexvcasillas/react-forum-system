"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdatePassword = void 0;

var _graphql = require("graphql");

var _user = require("../types/user.type");

var _responses = require("../utils/responses.utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UpdatePassword = function UpdatePassword(security, db) {
  return {
    type: _user.UserType,
    args: {
      password: {
        type: _graphql.GraphQLString
      },
      newPassword: {
        type: _graphql.GraphQLString
      }
    },
    resolve: function resolve(root, _ref, _ref2) {
      var password = _ref.password,
          newPassword = _ref.newPassword;
      var headers = _ref2.headers,
          token = _ref2.token,
          security = _ref2.security,
          db = _ref2.db;
      return security.ensureAuthenticated(token).then(
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(authData) {
          var user, equalPasswords;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!password || password === '' || !newPassword || newPassword === '')) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", _responses.MISSING_PARAMETERS);

                case 2:
                  if (!(password === newPassword)) {
                    _context.next = 4;
                    break;
                  }

                  return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                    status: 500,
                    message: "The current password and the new one must be different"
                  })));

                case 4:
                  _context.prev = 4;
                  _context.next = 7;
                  return db.user.findById(authData.identifier);

                case 7:
                  user = _context.sent;
                  _context.next = 13;
                  break;

                case 10:
                  _context.prev = 10;
                  _context.t0 = _context["catch"](4);
                  return _context.abrupt("return", _responses.UNEXPECTED_ERROR);

                case 13:
                  if (user) {
                    _context.next = 15;
                    break;
                  }

                  return _context.abrupt("return", NOT_FOUND);

                case 15:
                  _context.prev = 15;
                  _context.next = 18;
                  return user.comparePassword(newPassword);

                case 18:
                  equalPasswords = _context.sent;
                  _context.next = 24;
                  break;

                case 21:
                  _context.prev = 21;
                  _context.t1 = _context["catch"](15);
                  return _context.abrupt("return", _responses.UNEXPECTED_ERROR);

                case 24:
                  if (!equalPasswords) {
                    _context.next = 26;
                    break;
                  }

                  return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                    status: 500,
                    message: "The current password and the new one must be different"
                  })));

                case 26:
                  user.password = newPassword;
                  _context.prev = 27;
                  _context.next = 30;
                  return user.save();

                case 30:
                  _context.next = 35;
                  break;

                case 32:
                  _context.prev = 32;
                  _context.t2 = _context["catch"](27);
                  return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                    status: 500,
                    message: "An error ocurred while updating the user."
                  })));

                case 35:
                  return _context.abrupt("return", user.toObject());

                case 36:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[4, 10], [15, 21], [27, 32]]);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }(), security.onRejectedAuthentication);
    }
  };
};

exports.UpdatePassword = UpdatePassword;