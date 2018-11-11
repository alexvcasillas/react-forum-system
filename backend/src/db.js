import mongoose from 'mongoose';
import Promise from 'bluebird';
mongoose.Promise = Promise;
const dbUser = 'rfs-admin';
const dbPswd = 'ReactForumSystem03';
const dbName = 'react-forum-system';
const uri = `mongodb://${dbUser}:${dbPswd}@ds237748.mlab.com:37748/${dbName}`;

export default callback => {
  mongoose
    .connect(
      process.env.ENV === 'development' ? uri : process.env.MONGODB,
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
