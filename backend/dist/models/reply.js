"use strict";

module.exports = function (mongoose) {
  var Schema = mongoose.Schema;
  var ReplyScheme = new Schema({
    thread: {
      type: Schema.Types.ObjectId,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });
  ReplyScheme.set('autoIndex', false);
  ReplyScheme.pre('save', function (next) {
    this.updatedAt = Date.now();
    return next();
  });
  return mongoose.model('reply', ReplyScheme);
};