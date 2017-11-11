import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

// {
//   "author": "Rachel Kaser",
//   "title": "Twitter games are the best use of the new 280 character limit",
//   "description": "Some genius Twitter users are already using the expanded 280 character limit on Twitter in the best way: by playing games using emoji.",
//   "url": "https://thenextweb.com/twitter/2017/11/10/twitter-games-are-the-best-use-of-the-new-280-character-limit/",
//   "urlToImage": "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/05/shutterstock_255260497-social.jpg",
//   "publishedAt": "2017-11-10T22:37:55Z"
// },

/**
 * Article  Schema maching with newsapi
 */
const NewsSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  urlToImage: {
    type: String
  },
  publishedAt: {
    type: Date,
    default: Date.now
  }
});


/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
NewsSchema.method({});

/**
 * Statics
 */
NewsSchema.statics = {
  /**
   * Get post
   * @param {ObjectId} id - The objectId of post.
   * @returns {Promise<Post, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((post) => {
        if (post) {
          return post;
        }
        const err = new APIError('No such post exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },
  
  /**
   * List posts in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of posts to be skipped.
   * @param {number} limit - Limit number of posts to be returned.
   * @returns {Promise<Post[]>}
   */
  list({skip = 0, limit = 50} = {}) {
    return this.find()
      .sort({createdAt: -1})
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};

/**
 * @typedef Post
 */
export default mongoose.model('News', NewsSchema);
