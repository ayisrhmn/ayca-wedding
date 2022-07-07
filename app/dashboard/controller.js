const Banner = require('../banner/model');
const Category = require('../category/model');
const ProductImage = require('../product-image/model');
const Product = require('../product/model');

module.exports = {
  index: async (req, res) => {
    try {
      const banner = await Banner.countDocuments();
      const category = await Category.countDocuments();
      const productImage = await ProductImage.countDocuments();
      const product = await Product.countDocuments();

      res.render('index', {
        name: req.session.user.name,
        title: 'Dashboard',
        count: {
          banner,
          category,
          productImage,
          product,
        },
      });
    } catch (err) {
      console.log(err);
    }
  },
};
