export const Loaders = ({ db }) => {
  const UserLoader = () => {
    let memoizedUser = {};
    /**
     * This method loads and caches the user by the given id
     * @param {string} user identifier
     */
    const load = async id => {
      if (memoizedUser[id]) return memoizedUser[id];
      try {
        memoizedUser[id] = await db.user.findById(id).lean();
      } catch (error) {
        console.log('Error Loading User: ', id);
      }
      return memoizedUser[id];
    };
    /**
     * This method caches the given users array
     * @param {Array} User Array
     * @returns {object} category
     */
    const cache = users => {
      return new Promise(resolve => {
        users.forEach(user => {
          if (!memoizedUser[user._id]) {
            memoizedUser[user._id] = user;
          }
        });
        resolve();
      });
    };
    return { load, cache };
  };

  const CommunityLoader = () => {
    let memoizedCommunity = {};
    /**
     * This method loads and caches the community by the given id
     * @param {string} community identifier
     */
    const load = async id => {
      if (memoizedCommunity[id]) return memoizedCommunity[id];
      try {
        memoizedCommunity[id] = await db.community.findById(id).lean();
      } catch (error) {
        console.log('Error Loading Community: ', id);
      }
      return memoizedCommunity[id];
    };
    /**
     * This method caches the given communities array
     * @param {Array} communities Array
     * @returns {object} community
     */
    const cache = communities => {
      return new Promise(resolve => {
        communities.forEach(community => {
          if (!memoizedCommunity[community._id]) {
            memoizedCommunity[community._id] = community;
          }
        });
        resolve();
      });
    };
    return { load, cache };
  };

  const ThreadLoader = () => {
    let memoizedThread = {};
    /**
     * This method loads and caches the thread by the given id
     * @param {string} thread identifier
     */
    const load = async id => {
      if (memoizedThread[id]) return memoizedThread[id];
      try {
        memoizedThread[id] = await db.thread.findById(id).lean();
      } catch (error) {
        console.log('Error Loading Thread: ', id);
      }
      return memoizedThread[id];
    };
    /**
     * This method caches the given threads array
     * @param {Array} thread Array
     * @returns {object} category
     */
    const cache = threads => {
      return new Promise(resolve => {
        threads.forEach(thread => {
          if (!memoizedThread[thread._id]) {
            memoizedThread[thread._id] = thread;
          }
        });
        resolve();
      });
    };
    return { load, cache };
  };

  const ReplyLoader = () => {
    let memoizedReply = {};
    /**
     * This method loads and caches the post by the given id
     * @param {string} post identifier
     */
    const load = async id => {
      if (memoizedReply[id]) return memoizedReply[id];
      try {
        memoizedReply[id] = await db.reply.findById(id).lean();
      } catch (error) {
        console.log('Error Loading Reply: ', id);
      }
      return memoizedReply[id];
    };
    /**
     * This method caches the given replies array
     * @param {Array} reply Array
     * @returns {object} category
     */
    const cache = replies => {
      return new Promise(resolve => {
        replies.forEach(reply => {
          if (!memoizedReply[reply._id]) {
            memoizedReply[reply._id] = reply;
          }
        });
        resolve();
      });
    };
    return { load, cache };
  };

  return {
    UserLoader,
    CommunityLoader,
    ThreadLoader,
    ReplyLoader,
  };
};
