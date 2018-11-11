"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommunityType = void 0;

var _graphql = require("graphql");

var _responses = require("../utils/responses.utils");

var _thread = require("./thread.type");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CommunityType = new _graphql.GraphQLObjectType({
  name: 'Community',
  description: '...',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(community) {
          return community._id.toString();
        }
      },
      name: {
        type: _graphql.GraphQLString
      },
      description: {
        type: _graphql.GraphQLString
      },
      picture: {
        type: _graphql.GraphQLString
      },
      createdAt: {
        type: _graphql.GraphQLString,
        resolve: function resolve(community) {
          return community.createdAt.toString();
        }
      },
      updatedAt: {
        type: _graphql.GraphQLString,
        resolve: function resolve(community) {
          return community.updatedAt.toString();
        }
      },
      likes: {
        type: _graphql.GraphQLInt,
        resolve: function () {
          var _resolve = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(community, args, _ref) {
            var db;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    db = _ref.db;
                    _context.next = 3;
                    return db.community_likes.estimatedDocumentCount({
                      community: community._id.toString()
                    });

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
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
      },
      threads: {
        type: (0, _graphql.GraphQLList)(_thread.ThreadType),
        resolve: function () {
          var _resolve2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(community, args, _ref2) {
            var db, threads;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    db = _ref2.db;
                    _context2.prev = 1;
                    _context2.next = 4;
                    return db.thread.find({
                      community: community._id.toString()
                    }).lean();

                  case 4:
                    threads = _context2.sent;
                    _context2.next = 10;
                    break;

                  case 7:
                    _context2.prev = 7;
                    _context2.t0 = _context2["catch"](1);
                    return _context2.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                      status: 500,
                      message: "An error ocurred while getting community threads"
                    })));

                  case 10:
                    _context2.next = 12;
                    return loaders.thread.cache(threads);

                  case 12:
                    return _context2.abrupt("return", threads);

                  case 13:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 7]]);
          }));

          return function resolve(_x4, _x5, _x6) {
            return _resolve2.apply(this, arguments);
          };
        }()
      },
      threads_count: {
        type: _graphql.GraphQLInt,
        resolve: function () {
          var _resolve3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3(community, args, _ref3) {
            var db, threads_count;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    db = _ref3.db;
                    _context3.prev = 1;
                    _context3.next = 4;
                    return db.thread.countDocuments({
                      community: community._id.toString()
                    });

                  case 4:
                    threads_count = _context3.sent;
                    _context3.next = 10;
                    break;

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](1);
                    return _context3.abrupt("return", new _graphql.GraphQLError((0, _responses.Response)({
                      status: 500,
                      message: "An error ocurred while getting community threads"
                    })));

                  case 10:
                    return _context3.abrupt("return", threads_count);

                  case 11:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[1, 7]]);
          }));

          return function resolve(_x7, _x8, _x9) {
            return _resolve3.apply(this, arguments);
          };
        }()
      }
    };
  }
});
exports.CommunityType = CommunityType;