"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateThread = void 0;

var _graphql = require("graphql");

var _thread = require("../types/thread.type");

var _responses = require("../utils/responses.utils");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var CreateThread = function CreateThread() {
  return {
    type: _thread.ThreadType,
    args: {
      community: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      },
      title: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      },
      content: {
        type: (0, _graphql.GraphQLNonNull)(_graphql.GraphQLString)
      }
    },
    resolve: function resolve(root, _ref, ctx) {
      var community = _ref.community,
          title = _ref.title,
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
          var thread;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(!community || community === '' || !title || title === '' || !content || content === '')) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return", _responses.MISSING_PARAMETERS);

                case 2:
                  _context.prev = 2;
                  _context.next = 5;
                  return db.thread.create({
                    community: community,
                    author: authData.identifier,
                    title: title,
                    content: content
                  });

                case 5:
                  thread = _context.sent;
                  _context.next = 11;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](2);
                  return _context.abrupt("return", (0, _graphql.GraphQLError)((0, _responses.Response)({
                    status: 500,
                    message: "An error ocurred while creating the thread."
                  })));

                case 11:
                  return _context.abrupt("return", thread.toObject());

                case 12:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[2, 8]]);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }(), security.onRejectedAuthentication);
    }
  };
};

exports.CreateThread = CreateThread;