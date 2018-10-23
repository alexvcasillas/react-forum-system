export default mongoose => {
  const Schema = mongoose.Schema;
  const ForumSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    category: { type: Schema.Types.ObjectId, required: true },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date },
  });
  ForumSchema.set('autoIndex', false);
  ForumSchema.pre('save', next => {
    this.updatedAt = Date.now();
  });
  return mongoose.model('forum', ForumSchema);
};
