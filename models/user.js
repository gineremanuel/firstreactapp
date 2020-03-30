const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    userName: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    }
},
{
timestamps: true,
strict: false
}
);
    
module.exports = mongoose.model('User', userSchema, 'users');