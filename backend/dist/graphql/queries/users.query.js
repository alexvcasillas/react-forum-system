"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersQuery = void 0;

var _graphql = require("graphql");

var _user = require("../types/user.type");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var UsersQuery = function UsersQuery() {
  return {
    type: (0, _graphql.GraphQLList)(_user.UserType),
    resolve: function () {
      var _resolve = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(root, args, _ref) {
        var headers, loaders, token, security, db, users;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = _ref.headers, loaders = _ref.loaders, token = _ref.token, security = _ref.security, db = _ref.db;
                _context.next = 3;
                return db.user.find().lean();

              case 3:
                users = _context.sent;
                _context.next = 6;
                return loaders.user.cache(users);

              case 6:
                return _context.abrupt("return", users);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function resolve(_x, _x2, _x3) {
        return _resolve.apply(this, arguments);
      };
    }()
  };
};

exports.UsersQuery = UsersQuery;