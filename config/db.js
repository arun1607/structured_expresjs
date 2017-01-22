var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sample');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connected successfully");
});
module.exports = mongoose;