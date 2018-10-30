module.exports = mongoose => {
  const Schema = mongoose.Schema;
  const ThreadSchema = new Schema({
    community: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date },
  });
  ThreadSchema.set('autoIndex', false);
  ThreadSchema.pre('save', next => {
    this.updatedAt = Date.now();
    return next();
  });
  return mongoose.model('thread', ThreadSchema);
};
