"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunitiesQuery = void 0;

var _graphql = require("graphql");

var _community = require("../types/community.type");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CommunitiesQuery = function CommunitiesQuery() {
  return {
    type: (0, _graphql.GraphQLList)(_community.CommunityType),
    resolve: function () {
      var _resolve = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(root, args, _ref) {
        var headers, loaders, token, security, db, communities;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                headers = _ref.headers, loaders = _ref.loaders, token = _ref.token, security = _ref.security, db = _ref.db;
                _context.next = 3;
                return db.community.find().lean();

              case 3:
                communities = _context.sent;
                _context.next = 6;
                return loaders.community.cache(communities);

              case 6:
                return _context.abrupt("return", communities);

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

exports.CommunitiesQuery = CommunitiesQuery;