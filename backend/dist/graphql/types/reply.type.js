"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReplyType = void 0;

var _graphql = require("graphql");

var _user = require("./user.type");

var _thread = require("./thread.type");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ReplyType = new _graphql.GraphQLObjectType({
  name: 'Reply',
  description: '...',
  fields: function fields() {
    return {
      id: {
        type: _graphql.GraphQLString,
        resolve: function resolve(reply) {
          return reply._id.toString();
        }
      },
      content: {
        type: _graphql.GraphQLString
      },
      thread: {
        type: _thread.ThreadType,
        resolve: function () {
          var _resolve = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(reply, args, _ref) {
            var loaders;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    loaders = _ref.loaders;
                    _context.next = 3;
                    return loaders.thread.load(reply.thread);

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
          regeneratorRuntime.mark(function _callee2(reply, args, _ref2) {
            var loaders;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    loaders = _ref2.loaders;
                    _context2.next = 3;
                    return loaders.user.load(reply.author);

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
      createdAt: {
        type: _graphql.GraphQLString,
        resolve: function resolve(reply) {
          return reply.createdAt.toString();
        }
      },
      updatedAt: {
        type: _graphql.GraphQLString,
        resolve: function resolve(reply) {
          return reply.updatedAt.toString();
        }
      }
    };
  }
});
exports.ReplyType = ReplyType;