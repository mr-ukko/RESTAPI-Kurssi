const db = require('../database');

const account = {
    getAll: function(callback) {
        return db.query('select * from accounts', callback);
    },
    getById: function(id, callback) {
        return db.query('select * from accounts where id =?', [id], callback);
    }
}
module.exports = account;