"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateUser = void 0;

var _graphql = require("graphql");

var _user = require("../types/user.type");

var _responses = require("../utils/responses.utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UpdateUser = function UpdateUser(security, db) {
  return {
    type: _user.UserType,
    args: {
      name: {
        type: _graphql.GraphQLString
      },
      lastName: {
        type: _graphql.GraphQLString
      },
      avatar: {
        type: _graphql.GraphQLString
      }
    },
    resolve: function resolve(root, _ref, _ref2) {
      var name = _ref.name,
          lastName = _ref.lastName,
          avatar = _ref.avatar;
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
          var user, changes;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return db.user.findById(authData.identifier);

                case 3:
                  user = _context.sent;
                  _context.next = 9;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](0);
                  return _context.abrupt("return", _responses.UNEXPECTED_ERROR);

                case 9:
                  changes = false;

                  if (name && name !== '' && user.name !== name) {
                    user.name = name;
                    changes = true;
                  }

                  if (lastName && lastName !== '' && user.lastName !== lastName) {
                    user.lastName = lastName;
                    changes = true;
                  }

                  if (avatar && avatar !== '' && user.avatar !== avatar) {
                    user.avatar = avatar;
                    changes = true;
                  }

                  if (changes) {
                    _context.next = 15;
                    break;
                  }

                  return _context.abrupt("return", user);

                case 15:
                  _context.prev = 15;
                  _context.next = 18;
                  return user.save();

                case 18:
                  _context.next = 23;
                  break;

                case 20:
                  _context.prev = 20;
                  _context.t1 = _context["catch"](15);
                  return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                    status: 500,
                    message: "An error ocurred while updating the user."
                  })));

                case 23:
                  return _context.abrupt("return", user.toObject());

                case 24:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 6], [15, 20]]);
        }));

        return function (_x) {
          return _ref3.apply(this, arguments);
        };
      }(), security.onRejectedAuthentication);
    }
  };
};

exports.UpdateUser = UpdateUser;