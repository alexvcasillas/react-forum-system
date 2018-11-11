"use strict";

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SALT_WORK_FACTOR = 10;

module.exports = function (mongoose) {
  var Schema = mongoose.Schema;
  var UserSchema = new Schema({
    email: {
      type: String,
      required: true,
      index: true,
      unique: true
    },
    password: {
      type: String
    },
    name: {
      type: String
    },
    lastName: {
      type: String
    },
    username: {
      type: String,
      unique: true,
      required: true
    },
    avatar: {
      type: String
    },
    role: {
      type: String,
      enum: ['ADMIN', 'USER'],
      default: 'USER'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    token: {
      type: String
    },
    accountDisabled: {
      type: Boolean,
      default: false
    }
  });
  UserSchema.set('autoIndex', false);
  UserSchema.pre('save', function (next) {
    var user = this;
    user.updatedAt = Date.now();
    if (!user.isModified('password')) return next();

    _bcryptjs.default.genSalt(SALT_WORK_FACTOR, function (error, salt) {
      if (error) return next(error);

      _bcryptjs.default.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        return next();
      });
    });
  }); // # User schema method definitions

  UserSchema.methods.comparePassword = function (thePassword) {
    var _this = this;

    return new Promise(function (resolve, reject) {
      return _bcryptjs.default.compare(thePassword, _this.password, function (error, match) {
        if (error) return reject(error);
        return resolve(match);
      });
    });
  };

  return mongoose.model('user', UserSchema);
};