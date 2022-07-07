const mongoose = require('mongoose');

let bannerSchema = mongoose.Schema(
  {
    bannerName: {
      type: String,
      require: [true, 'Banner name must be filled!'],
    },
    filenameImage: {
      type: String,
      require: [true, 'File name image must be filled!'],
    },
  },
  {timestamps: true},
);

module.exports = mongoose.model('Banner', bannerSchema);
