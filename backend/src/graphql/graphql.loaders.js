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

  const PostLoader = () => {
    let memoizedPost = {};
    /**
     * This method loads and caches the post by the given id
     * @param {string} post identifier
     */
    const load = async id => {
      if (memoizedPost[id]) return memoizedPost[id];
      try {
        memoizedPost[id] = await db.post.findById(id).lean();
      } catch (error) {
        console.log('Error Loading Post: ', id);
      }
      return memoizedPost[id];
    };
    /**
     * This method caches the given posts array
     * @param {Array} post Array
     * @returns {object} category
     */
    const cache = posts => {
      return new Promise(resolve => {
        posts.forEach(post => {
          if (!memoizedPost[post._id]) {
            memoizedPost[post._id] = post;
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
    PostLoader,
  };
};
