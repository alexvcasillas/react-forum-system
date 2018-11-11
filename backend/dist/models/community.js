"use strict";

module.exports = function (mongoose) {
  var Schema = mongoose.Schema;
  var CommunitySchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    picture: {
      type: String
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
  CommunitySchema.set('autoIndex', false);
  CommunitySchema.pre('save', function (next) {
    this.updatedAt = Date.now();
    return next();
  });
  return mongoose.model('community', CommunitySchema);
};