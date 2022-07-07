const Banner = require('../banner/model');
const Category = require('../category/model');
const Product = require('../product/model');

module.exports = {
  home: async (_, res) => {
    try {
      const banner = await Banner.find();
      const category = await Category.find();
      const productNew = await Product.find({statusNew: 'Y'})
        .select('productName price productImage category')
        .populate('productImage')
        .populate('category');
      const productPopular = await Product.find({statusPopular: 'Y'})
        .select('productName price productImage category')
        .populate('productImage')
        .populate('category');

      res.status(200).json({
        data: {
          banner,
          category,
          productNew,
          productPopular,
        },
      });
    } catch (err) {
      res.status(500).json({message: err.message || 'Internal server error!'});
    }
  },
  category: async (_, res) => {
    try {
      const category = await Category.find();
      const product = await Product.find()
        .select('productName price productImage category')
        .populate('productImage')
        .populate('category');

      res.status(200).json({
        data: {
          category,
          product,
        },
      });
    } catch (err) {
      res.status(500).json({message: err.message || 'Internal server error!'});
    }
  },
  productByCategory: async (req, res) => {
    try {
      const {id} = req.params;

      const product = await Product.find({category: id})
        .select('productName price productImage category')
        .populate('productImage')
        .populate('category');

      res.status(200).json({
        data: product,
      });
    } catch (err) {
      res.status(500).json({message: err.message || 'Internal server error!'});
    }
  },
  detailProduct: async (req, res) => {
    try {
      const {id} = req.params;

      const product = await Product.findOne({_id: id})
        .populate('productImage')
        .populate('category');

      res.status(200).json({
        data: product,
      });
    } catch (err) {
      res.status(500).json({message: err.message || 'Internal server error!'});
    }
  },
};
