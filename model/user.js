var db = require('../config/db');

var userSchema = db.Schema({
    username: String,
    passwd: String
}, {collection: 'employee'});

var User = db.model('User', userSchema);

module.exports = User;