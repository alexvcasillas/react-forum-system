"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreadsByCommunityQuery = void 0;

var _graphql = require("graphql");

var _responses = require("../utils/responses.utils");

var _thread = require("../types/thread.type");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ThreadsByCommunityQuery = function ThreadsByCommunityQuery() {
  return {
    type: (0, _graphql.GraphQLList)(_thread.ThreadType),
    args: {
      community: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      },
      filter: {
        type: _graphql.GraphQLString
      }
    },
    resolve: function () {
      var _resolve = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(root, _ref, _ref2) {
        var community, _ref$filter, filter, headers, loaders, token, security, db, threads;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                community = _ref.community, _ref$filter = _ref.filter, filter = _ref$filter === void 0 ? '' : _ref$filter;
                headers = _ref2.headers, loaders = _ref2.loaders, token = _ref2.token, security = _ref2.security, db = _ref2.db;
                _context.prev = 2;
                _context.next = 5;
                return db.thread.find({
                  community: community,
                  title: {
                    $regex: filter,
                    $options: 'i'
                  }
                }).sort({
                  updatedAt: 'desc'
                }).lean();

              case 5:
                threads = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                return _context.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                  status: 500,
                  message: "An error ocurred while retrieving this community threads."
                })));

              case 11:
                _context.next = 13;
                return loaders.thread.cache(threads);

              case 13:
                return _context.abrupt("return", threads);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      return function resolve(_x, _x2, _x3) {
        return _resolve.apply(this, arguments);
      };
    }()
  };
};

exports.ThreadsByCommunityQuery = ThreadsByCommunityQuery;