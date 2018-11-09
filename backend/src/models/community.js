module.exports = mongoose => {
  const Schema = mongoose.Schema;
  const CommunitySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    picture: { type: String },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date, default: new Date() },
  });
  CommunitySchema.set('autoIndex', false);
  CommunitySchema.pre('save', function(next) {
    this.updatedAt = new Date();
    return next();
  });
  return mongoose.model('community', CommunitySchema);
};
