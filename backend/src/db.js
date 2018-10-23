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
      uri,
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
        category: require('./models/category')(mongoose),
        // forum: require('./models/forum')(mongoose),
        // thread: require('./models/thread')(mongoose),
        // post: require('./models/post')(mongoose),
      };
      callback(db);
    })
    .catch(err => console.error.bind(console, `connection error: ${err.message}`));
};
