export default mongoose => {
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    thread: { type: Schema.Types.ObjectId, required: true },
    author: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date },
  });
  PostSchema.set('autoIndex', false);
  PostSchema.pre('save', next => {
    this.updatedAt = Date.now();
    return next();
  });
  return mongoose.model('post', PostSchema);
};
