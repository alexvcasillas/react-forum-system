module.exports = mongoose => {
  const Schema = mongoose.Schema;
  const CategorySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date },
  });
  CategorySchema.set('autoIndex', false);
  CategorySchema.pre('save', next => {
    this.updatedAt = Date.now();
    return next();
  });
  return mongoose.model('category', CategorySchema);
};
