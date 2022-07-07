const mongoose = require('mongoose');

let userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, 'Username must be filled!'],
    },
    name: {
      type: String,
      require: [true, 'Name must be filled!'],
    },
    password: {
      type: String,
      require: [true, 'Password must be filled!'],
    },
  },
  {timestamps: true},
);

module.exports = mongoose.model('User', userSchema);
