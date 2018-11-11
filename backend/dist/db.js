"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bluebird = _interopRequireDefault(require("bluebird"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_mongoose.default.Promise = _bluebird.default;
var dbUser = 'rfs-admin';
var dbPswd = 'ReactForumSystem03';
var dbName = 'react-forum-system';
var uri = "mongodb://".concat(dbUser, ":").concat(dbPswd, "@ds237748.mlab.com:37748/").concat(dbName);

var _default = function _default(callback) {
  _mongoose.default.connect(process.env.ENV === 'development' ? uri : process.env.MONGODB, {
    autoIndex: false,
    useNewUrlParser: true
  }).then(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var db;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (process.env.ENV === 'development') {
              _mongoose.default.set('debug', true);
            }

            db = {
              user: require('./models/user')(_mongoose.default),
              community: require('./models/community')(_mongoose.default),
              thread: require('./models/thread')(_mongoose.default),
              reply: require('./models/reply')(_mongoose.default),
              community_likes: require('./models/community-likes')(_mongoose.default)
            };
            callback(db);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }))).catch(function (err) {
    return console.error.bind(console, "connection error: ".concat(err.message));
  });
};

exports.default = _default;