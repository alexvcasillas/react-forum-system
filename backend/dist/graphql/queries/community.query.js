"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityQuery = void 0;

var _graphql = require("graphql");

var _community = require("../types/community.type");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CommunityQuery = function CommunityQuery() {
  return {
    type: _community.CommunityType,
    args: {
      id: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      }
    },
    resolve: function () {
      var _resolve = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(root, _ref, _ref2) {
        var id, headers, loaders, token, security, db;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                headers = _ref2.headers, loaders = _ref2.loaders, token = _ref2.token, security = _ref2.security, db = _ref2.db;
                _context.next = 4;
                return loaders.community.load(id);

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
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

exports.CommunityQuery = CommunityQuery;