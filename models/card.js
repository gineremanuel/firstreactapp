const mongoose = require('mongoose');

let cardSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
  }
},
{
timestamps: true,
strict: false
}
);

module.exports = mongoose.model('Card', cardSchema, cards);
