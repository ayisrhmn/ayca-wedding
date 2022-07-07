const Product = require('./model');
const Category = require('../category/model');
const ProductImage = require('../product-image/model');

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');

      const alert = {message: alertMessage, status: alertStatus};
      const product = await Product.find()
        .populate('category')
        .populate('productImage');

      res.render('product/product', {
        product,
        alert,
        name: req.session.user.name,
        title: 'Product',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product');
    }
  },
  viewCreate: async (req, res) => {
    try {
      const category = await Category.find();
      const productImage = await ProductImage.find();

      res.render('product/create', {
        category,
        productImage,
        name: req.session.user.name,
        title: 'Add Product',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product');
    }
  },
  actionCreate: async (req, res) => {
    try {
      const {
        productName,
        productImage,
        category,
        price,
        description,
        link,
      } = req.body;

      const product = new Product({
        productName,
        productImage,
        category,
        price,
        description,
        link,
        user: req.session.user.id,
      });

      await product.save();

      req.flash('alertMessage', 'Successfully add product!');
      req.flash('alertStatus', 'success');

      res.redirect('/product');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product');
    }
  },
  viewEdit: async (req, res) => {
    try {
      const {id} = req.params;
      const category = await Category.find();
      const productImage = await ProductImage.find();
      const product = await Product.findOne({_id: id})
        .populate('category')
        .populate('productImage');

      res.render('product/edit', {
        product,
        category,
        productImage,
        name: req.session.user.name,
        title: 'Edit Product',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product');
    }
  },
  actionEdit: async (req, res) => {
    try {
      const {id} = req.params;
      const {
        productName,
        productImage,
        category,
        price,
        description,
        link,
      } = req.body;

      await Product.findOneAndUpdate({
        _id: id,
      }, {
        productName,
        productImage,
        category,
        price,
        description,
        link,
        user: req.session.user.id,
      });

      req.flash('alertMessage', 'Successfully update product!');
      req.flash('alertStatus', 'success');

      res.redirect('/product');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product');
    }
  },
  actionDelete: async (req, res) => {
    try {
      const {id} = req.params;

      await Product.findOneAndRemove({_id: id});

      req.flash('alertMessage', 'Successfully delete product!');
      req.flash('alertStatus', 'success');

      res.redirect('/product');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product');
    }
  },
  actionStatusNew: async (req, res) => {
    try {
      const {id} = req.params;

      const product = await Product.findOne({_id: id});
      let statusNew = product.statusNew === 'Y' ? 'N' : 'Y';

      await Product.findByIdAndUpdate({_id: id}, {statusNew});

      req.flash('alertMessage', 'Successfully update status new!');
      req.flash('alertStatus', 'success');

      res.redirect('/product');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product');
    }
  },
  actionStatusPopular: async (req, res) => {
    try {
      const {id} = req.params;

      const product = await Product.findOne({_id: id});
      let statusPopular = product.statusPopular === 'Y' ? 'N' : 'Y';

      await Product.findByIdAndUpdate({_id: id}, {statusPopular});

      req.flash('alertMessage', 'Successfully update status popular!');
      req.flash('alertStatus', 'success');

      res.redirect('/product');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product');
    }
  },
};
