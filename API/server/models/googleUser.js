const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const googleSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default:new Date()
  },
  
  
});

const GoogleUser = mongoose.model('GoogleUser', googleSchema);    //keep it to capital letters
module.exports = {GoogleUser};