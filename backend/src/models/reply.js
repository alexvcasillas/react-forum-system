module.exports = mongoose => {
  const Schema = mongoose.Schema;
  const ReplyScheme = new Schema({
    thread: { type: Schema.Types.ObjectId, required: true },
    author: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date },
  });
  ReplyScheme.set('autoIndex', false);
  ReplyScheme.pre('save', function(next) {
    this.updatedAt = new Date();
    return next();
  });
  return mongoose.model('reply', ReplyScheme);
};
