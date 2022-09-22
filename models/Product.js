const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
})

module.exports = new mongoose.model('Product', productSchema)
