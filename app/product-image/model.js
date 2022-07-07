const mongoose = require('mongoose');

let productImageSchema = mongoose.Schema(
  {
    productImageName: {
      type: String,
      require: [true, 'Product image name must be filled!'],
    },
    filenameImage: {
      type: String,
      require: [true, 'File name image must be filled!'],
    },
  },
  {timestamps: true},
);

module.exports = mongoose.model('ProductImage', productImageSchema);
