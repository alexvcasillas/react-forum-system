"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loaders = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Loaders = function Loaders(_ref) {
  var db = _ref.db;

  var UserLoader = function UserLoader() {
    var memoizedUser = {};
    /**
     * This method loads and caches the user by the given id
     * @param {string} user identifier
     */

    var load =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(id) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!memoizedUser[id]) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", memoizedUser[id]);

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return db.user.findById(id).lean();

              case 5:
                memoizedUser[id] = _context.sent;
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                console.log('Error Loading User: ', id);

              case 11:
                return _context.abrupt("return", memoizedUser[id]);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      return function load(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    /**
     * This method caches the given users array
     * @param {Array} User Array
     * @returns {object} category
     */


    var cache = function cache(users) {
      return new Promise(function (resolve) {
        users.forEach(function (user) {
          if (!memoizedUser[user._id]) {
            memoizedUser[user._id] = user;
          }
        });
        resolve();
      });
    };

    return {
      load: load,
      cache: cache
    };
  };

  var CommunityLoader = function CommunityLoader() {
    var memoizedCommunity = {};
    /**
     * This method loads and caches the community by the given id
     * @param {string} community identifier
     */

    var load =
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(id) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!memoizedCommunity[id]) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", memoizedCommunity[id]);

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return db.community.findById(id).lean();

              case 5:
                memoizedCommunity[id] = _context2.sent;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                console.log('Error Loading Community: ', id);

              case 11:
                return _context2.abrupt("return", memoizedCommunity[id]);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8]]);
      }));

      return function load(_x2) {
        return _ref3.apply(this, arguments);
      };
    }();
    /**
     * This method caches the given communities array
     * @param {Array} communities Array
     * @returns {object} community
     */


    var cache = function cache(communities) {
      return new Promise(function (resolve) {
        communities.forEach(function (community) {
          if (!memoizedCommunity[community._id]) {
            memoizedCommunity[community._id] = community;
          }
        });
        resolve();
      });
    };

    return {
      load: load,
      cache: cache
    };
  };

  var ThreadLoader = function ThreadLoader() {
    var memoizedThread = {};
    /**
     * This method loads and caches the thread by the given id
     * @param {string} thread identifier
     */

    var load =
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(id) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!memoizedThread[id]) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", memoizedThread[id]);

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return db.thread.findById(id).lean();

              case 5:
                memoizedThread[id] = _context3.sent;
                _context3.next = 11;
                break;

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](2);
                console.log('Error Loading Thread: ', id);

              case 11:
                return _context3.abrupt("return", memoizedThread[id]);

              case 12:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 8]]);
      }));

      return function load(_x3) {
        return _ref4.apply(this, arguments);
      };
    }();
    /**
     * This method caches the given threads array
     * @param {Array} thread Array
     * @returns {object} category
     */


    var cache = function cache(threads) {
      return new Promise(function (resolve) {
        threads.forEach(function (thread) {
          if (!memoizedThread[thread._id]) {
            memoizedThread[thread._id] = thread;
          }
        });
        resolve();
      });
    };

    return {
      load: load,
      cache: cache
    };
  };

  var ReplyLoader = function ReplyLoader() {
    var memoizedReply = {};
    /**
     * This method loads and caches the post by the given id
     * @param {string} post identifier
     */

    var load =
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(id) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!memoizedReply[id]) {
                  _context4.next = 2;
                  break;
                }

                return _context4.abrupt("return", memoizedReply[id]);

              case 2:
                _context4.prev = 2;
                _context4.next = 5;
                return db.reply.findById(id).lean();

              case 5:
                memoizedReply[id] = _context4.sent;
                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](2);
                console.log('Error Loading Reply: ', id);

              case 11:
                return _context4.abrupt("return", memoizedReply[id]);

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[2, 8]]);
      }));

      return function load(_x4) {
        return _ref5.apply(this, arguments);
      };
    }();
    /**
     * This method caches the given replies array
     * @param {Array} reply Array
     * @returns {object} category
     */


    var cache = function cache(replies) {
      return new Promise(function (resolve) {
        replies.forEach(function (reply) {
          if (!memoizedReply[reply._id]) {
            memoizedReply[reply._id] = reply;
          }
        });
        resolve();
      });
    };

    return {
      load: load,
      cache: cache
    };
  };

  return {
    UserLoader: UserLoader,
    CommunityLoader: CommunityLoader,
    ThreadLoader: ThreadLoader,
    ReplyLoader: ReplyLoader
  };
};

exports.Loaders = Loaders;