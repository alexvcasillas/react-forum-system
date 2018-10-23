"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bluebird = _interopRequireDefault(require("bluebird"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.Promise = _bluebird.default;
var dbUser = 'rfs-admin';
var dbPswd = 'ReactForumSystem03';
var dbName = 'react-forum-system';
var uri = "mongodb://".concat(dbUser, ":").concat(dbPswd, "@ds237748.mlab.com:37748/").concat(dbName);

var _default = function _default(callback) {
  _mongoose.default.connect(uri, {
    autoIndex: false,
    useNewUrlParser: true
  }).then(function () {
    if (process.env.ENV === 'development') {
      _mongoose.default.set('debug', true);
    }

    var db = {};
    callback(db);
  }).catch(function (err) {
    return console.error.bind(console, "connection error: ".concat(err.message));
  });
};

exports.default = _default;