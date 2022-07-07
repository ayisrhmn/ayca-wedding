const Category = require('./model');

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');

      const alert = {message: alertMessage, status: alertStatus};
      const category = await Category.find();

      res.render('category/category', {
        category,
        alert,
        name: req.session.user.name,
        title: 'Category',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/category');
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render('category/create', {
        name: req.session.user.name,
        title: 'Add Category',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/category');
    }
  },
  actionCreate: async (req, res) => {
    try {
      const {name, filenameImage} = req.body;

      let category = await Category({name, filenameImage});
      await category.save();

      req.flash('alertMessage', 'Successfully add category!');
      req.flash('alertStatus', 'success');

      res.redirect('/category');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/category');
    }
  },
  viewEdit: async (req, res) => {
    try {
      const {id} = req.params;
      const category = await Category.findOne({_id: id});

      res.render('category/edit', {
        category,
        name: req.session.user.name,
        title: 'Edit Category',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/category');
    }
  },
  actionEdit: async (req, res) => {
    try {
      const {id} = req.params;
      const {name, filenameImage} = req.body;

      await Category.findOneAndUpdate({_id: id}, {name, filenameImage});

      req.flash('alertMessage', 'Successfully update category!');
      req.flash('alertStatus', 'success');

      res.redirect('/category');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/category');
    }
  },
  actionDelete: async (req, res) => {
    try {
      const {id} = req.params;

      await Category.findOneAndRemove({_id: id});

      req.flash('alertMessage', 'Successfully delete category!');
      req.flash('alertStatus', 'success');

      res.redirect('/category');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/category');
    }
  },
};
