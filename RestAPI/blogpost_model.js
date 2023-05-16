const db = require('../database');

const blogPost = {
    getAll: function(callback) {
        return db.query('select * from blogPost', callback);
      }
}
module.exports = blogPost;