import bcrypt from 'bcryptjs';
const SALT_WORK_FACTOR = 10;

module.exports = mongoose => {
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    email: { type: String, required: true, index: true, unique: true },
    password: { type: String },
    name: { type: String },
    lastName: { type: String },
    username: { type: String, unique: true, required: true },
    avatar: { type: String },
    role: { type: String, enum: ['ADMIN', 'USER'], default: 'USER' },
    createdAt: { type: Date, default: new Date() },
    updatedAt: { type: Date },
    token: { type: String },
    accountDisabled: { type: Boolean, default: false },
  });
  UserSchema.set('autoIndex', false);
  UserSchema.pre('save', function(next) {
    const user = this;
    user.updatedAt = new Date();
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(error, salt) {
      if (error) return next(error);
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        return next();
      });
    });
  });

  // # User schema method definitions
  UserSchema.methods.comparePassword = function(thePassword) {
    return new Promise((resolve, reject) => {
      return bcrypt.compare(thePassword, this.password, function(error, match) {
        if (error) return reject(error);
        return resolve(match);
      });
    });
  };

  return mongoose.model('user', UserSchema);
};
