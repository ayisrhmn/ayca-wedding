const mongoose = require('mongoose');

let productSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      require: [true, 'Game Name must be filled!'],
    },
    price: {
      type: Number,
      require: [true, 'Price must be filled!'],
    },
    description: {
      type: String,
      require: [true, 'Game Name must be filled!'],
    },
    statusNew: {
      type: String,
      enum: ['Y', 'N'],
      default: 'Y',
    },
    statusPopular: {
      type: String,
      enum: ['Y', 'N'],
      default: 'N',
    },
    productImage: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductImage',
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
    },
    link: {
      type: String,
      require: [true, 'Link must be filled!'],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {timestamps: true},
);

module.exports = mongoose.model('Product', productSchema);
