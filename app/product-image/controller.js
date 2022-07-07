const ProductImage = require('./model');

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');

      const alert = {message: alertMessage, status: alertStatus};
      const productImage = await ProductImage.find();

      res.render('product-image/product-image', {
        productImage,
        alert,
        name: req.session.user.name,
        title: 'Product Image',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product-image');
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render('product-image/create', {
        name: req.session.user.name,
        title: 'Add Product Image',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product-image');
    }
  },
  actionCreate: async (req, res) => {
    try {
      const {productImageName, filenameImage} = req.body;

      let productImage = await ProductImage({productImageName, filenameImage});
      await productImage.save();

      req.flash('alertMessage', 'Successfully add product image!');
      req.flash('alertStatus', 'success');

      res.redirect('/product-image');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product-image');
    }
  },
  viewEdit: async (req, res) => {
    try {
      const {id} = req.params;
      const productImage = await ProductImage.findOne({_id: id});

      res.render('product-image/edit', {
        productImage,
        name: req.session.user.name,
        title: 'Edit Product Image',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product-image');
    }
  },
  actionEdit: async (req, res) => {
    try {
      const {id} = req.params;
      const {productImageName, filenameImage} = req.body;

      await ProductImage.findOneAndUpdate({_id: id}, {productImageName, filenameImage});

      req.flash('alertMessage', 'Successfully update product image!');
      req.flash('alertStatus', 'success');

      res.redirect('/product-image');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product-image');
    }
  },
  actionDelete: async (req, res) => {
    try {
      const {id} = req.params;

      await ProductImage.findOneAndRemove({_id: id});

      req.flash('alertMessage', 'Successfully delete product image!');
      req.flash('alertStatus', 'success');

      res.redirect('/product-image');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/product-image');
    }
  },
};
