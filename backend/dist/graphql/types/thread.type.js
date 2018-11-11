"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThreadType = void 0;

var _graphql = require("graphql");

var _user = require("./user.type");

var _community = require("./community.type");

var _reply = require("./reply.type");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ThreadType = new _graphql.GraphQLObjectType({
  name: 'Thread',
  description: '...',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(thread) {
          return thread._id.toString();
        }
      },
      title: {
        type: _graphql.GraphQLString
      },
      content: {
        type: _graphql.GraphQLString
      },
      community: {
        type: _community.CommunityType,
        resolve: function () {
          var _resolve = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(thread, args, _ref) {
            var loaders;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    loaders = _ref.loaders;
                    _context.next = 3;
                    return loaders.community.load(thread.community);

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
      author: {
        type: _user.UserType,
        resolve: function () {
          var _resolve2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(thread, args, _ref2) {
            var loaders;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    loaders = _ref2.loaders;
                    _context2.next = 3;
                    return loaders.user.load(thread.author);

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function resolve(_x4, _x5, _x6) {
            return _resolve2.apply(this, arguments);
          };
        }()
      },
      replies: {
        type: (0, _graphql.GraphQLList)(_reply.ReplyType),
        resolve: function () {
          var _resolve3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3(thread, args, _ref3) {
            var loaders, db, replies;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    loaders = _ref3.loaders, db = _ref3.db;
                    _context3.prev = 1;
                    _context3.next = 4;
                    return db.reply.find({
                      thread: thread._id.toString()
                    }).lean();

                  case 4:
                    replies = _context3.sent;
                    _context3.next = 10;
                    break;

                  case 7:
                    _context3.prev = 7;
                    _context3.t0 = _context3["catch"](1);
                    return _context3.abrupt("return", new GraphQLError(Response({
                      status: 500,
                      message: "An error ocurred while getting thread replies"
                    })));

                  case 10:
                    _context3.next = 12;
                    return loaders.reply.cache(replies);

                  case 12:
                    return _context3.abrupt("return", replies);

                  case 13:
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
      },
      createdAt: {
        type: _graphql.GraphQLString,
        resolve: function resolve(thread) {
          return thread.createdAt.toString();
        }
      },
      updatedAt: {
        type: _graphql.GraphQLString,
        resolve: function resolve(thread) {
          return thread.updatedAt.toString();
        }
      }
    };
  }
});
exports.ThreadType = ThreadType;