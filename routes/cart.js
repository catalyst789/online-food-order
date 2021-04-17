var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cart');
// mongoose.connect('mongodb://admin:admin007@ds157964.mlab.com:57964/cafeteria')

var cartSchema = mongoose.Schema({
  prdc: Number
})

module.exports = mongoose.model('cart', cartSchema);