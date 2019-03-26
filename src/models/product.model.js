let mongoose = require('mongoose')

mongoose.connect(`mongodb://localhost:27017/productdb`)

let ProductSchema = new mongoose.Schema({
  product_title: {
    type: String,
    required: true,
    unique: true
  },

  product_category: {
    type: String,
    required: true,
    unique: true
  },

  product_vendor: {
    type: String,
    required: true,
    unique: true
  },

  product_price: {
    type: String,
    required: true,
    unique: true
  }



})

module.exports = mongoose.model('Product', ProductSchema)
