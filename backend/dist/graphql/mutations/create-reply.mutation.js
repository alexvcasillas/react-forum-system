"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateReply = void 0;

var _graphql = require("graphql");

var _reply = require("../types/reply.type");

var _responses = require("../utils/responses.utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CreateReply = function CreateReply() {
  return {
    type: _reply.ReplyType,
    args: {
      thread: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      },
      content: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      }
    },
    resolve: function resolve(root, _ref, ctx) {
      var thread = _ref.thread,
          content = _ref.content;
      var headers = ctx.headers,
          loaders = ctx.loaders,
          security = ctx.security,
          db = ctx.db;
      return security.ensureAuthenticated(ctx.request.cookies.token).then(
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(authData) {
          var reply;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  console.log({
                    thread: thread,
                    content: content
                  });

                  if (!(!thread || thread === '' || !content || content === '')) {
                    _context.next = 3;
                    break;
                  }

                  return _context.abrupt("return", _responses.MISSING_PARAMETERS);

                case 3:
                  _context.prev = 3;
                  _context.next = 6;
                  return db.reply.create({
                    thread: thread,
                    author: authData.identifier,
                    content: content
                  });

                case 6:
                  reply = _context.sent;
                  _context.next = 12;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](3);
                  return _context.abrupt("return", (0, _graphql.GraphQLError)((0, _responses.Response)({
                    status: 500,
                    message: "An error ocurred while creating the reply."
                  })));

                case 12:
                  return _context.abrupt("return", reply.toObject());

                case 13:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[3, 9]]);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(), security.onRejectedAuthentication);
    }
  };
};

exports.CreateReply = CreateReply;