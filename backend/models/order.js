var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  user: String,
  items:[]
});

var Order = mongoose.model('Order', orderSchema);

module.exports = Order;
