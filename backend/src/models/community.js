module.exports = mongoose => {
  const Schema = mongoose.Schema;
  const CommunitySchema = new Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    slug: { type: String, required: true, index: true, unique: true },
    picture: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });
  CommunitySchema.set('autoIndex', false);
  CommunitySchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    return next();
  });
  return mongoose.model('community', CommunitySchema);
};
