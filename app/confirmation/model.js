const mongoose = require('mongoose');

let confirmSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      require: [true, 'Name must be filled!'],
    },
    Place: {
      type: String,
      require: [true, 'Place must be filled!'],
    },
    Confirmation: {
      type: String,
      require: [true, 'Confirmation must be filled!'],
    },
  },
  {timestamps: true},
);

module.exports = mongoose.model('Confirmation', confirmSchema);
