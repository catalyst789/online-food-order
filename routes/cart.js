var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/cart');
// mongoose.connect('mongodb://admin:admin007@ds157964.mlab.com:57964/cafeteria')

mongoose.connect('mongodb+srv://jkthecoder:jkTheCoder@cluster0.va5hj.mongodb.net/skilllssharedatabase?retryWrites=true&w=majority',  {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then( () => console.log('Database Connected ..!'))
.catch( err => console.log(err));

var cartSchema = mongoose.Schema({
  prdc: Number
})

module.exports = mongoose.model('cart', cartSchema);
