const mongoose = require('mongoose');

let greetingSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      require: [true, 'Name must be filled!'],
    },
    Greeting: {
      type: String,
      require: [true, 'Greeting must be filled!'],
    },
  },
  {timestamps: true},
);

module.exports = mongoose.model('Greetings', greetingSchema);
