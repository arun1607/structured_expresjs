var db = require('../config/db');

var userSchema = db.Schema({
    orderId: {type: Number, unique: true},
    orderDate: {type: Date, default: Date.now}
}, {collection: 'orders'});

var Order = db.model('Order', userSchema);

module.exports = Order;