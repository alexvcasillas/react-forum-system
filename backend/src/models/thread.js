module.exports = mongoose => {
  const Schema = mongoose.Schema;
  const ThreadSchema = new Schema({
    community: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date },
  });
  ThreadSchema.set('autoIndex', false);
  ThreadSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    return next();
  });
  return mongoose.model('thread', ThreadSchema);
};
