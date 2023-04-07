const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  product_image: {
    data: Buffer,
    contentType:String
    
    
  },
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  price_info:{
    type:String,
    required:true

  },
  uuid:{
    type:String,
    required:true
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);    //keep it to capital letters
module.exports = {Product};