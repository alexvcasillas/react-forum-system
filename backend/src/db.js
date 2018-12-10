import mongoose from 'mongoose';
import Promise from 'bluebird';
mongoose.Promise = Promise;

export default callback => {
  mongoose
    .connect(
      process.env.ENV === 'development' ? process.env.MONGODB : process.env.MONGODB,
      {
        autoIndex: false,
        useNewUrlParser: true,
      },
    )
    .then(async () => {
      if (process.env.ENV === 'development') {
        mongoose.set('debug', true);
      }
      const db = {
        user: require('./models/user')(mongoose),
        community: require('./models/community')(mongoose),
        thread: require('./models/thread')(mongoose),
        reply: require('./models/reply')(mongoose),
        community_likes: require('./models/community-likes')(mongoose),
      };
      callback(db);
    })
    .catch(err => console.error.bind(console, `connection error: ${err.message}`));
};
