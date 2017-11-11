import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

/**
 * Source  Schema maching with newsapi
 */
const SourceSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
  name: {
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
  category: {
    type: String
  },
  language: {
    type: String
  },
  country: {
    type: String
  },
  sortBysAvailable: {
    type: [String]
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
SourceSchema.method({});

/**
 * Statics
 */
SourceSchema.statics = {
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
export default mongoose.model('Source', SourceSchema);
