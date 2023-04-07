const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true
  },
  age:{
    type:Number,
    required:true

  },
  role:{
    type:Number,
    required:false
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);    //keep it to capital letters
module.exports = {User};