const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  expires: {
    type: String,
    required: true,
  },
  session: {
    type: String,
    required: true
  },
  
  
});

const Session = mongoose.model('Session', sessionSchema);    //keep it to capital letters
module.exports = {Session};