const Banner = require('./model');

module.exports = {
  index: async (req, res) => {
    try {
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');

      const alert = {message: alertMessage, status: alertStatus};
      const banner = await Banner.find();

      res.render('banner/banner', {
        banner,
        alert,
        name: req.session.user.name,
        title: 'Banner',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/banner');
    }
  },
  viewCreate: async (req, res) => {
    try {
      res.render('banner/create', {
        name: req.session.user.name,
        title: 'Add Banner',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/banner');
    }
  },
  actionCreate: async (req, res) => {
    try {
      const {bannerName, filenameImage} = req.body;

      let banner = await Banner({bannerName, filenameImage});
      await banner.save();

      req.flash('alertMessage', 'Successfully add banner!');
      req.flash('alertStatus', 'success');

      res.redirect('/banner');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/banner');
    }
  },
  viewEdit: async (req, res) => {
    try {
      const {id} = req.params;
      const banner = await Banner.findOne({_id: id});

      res.render('banner/edit', {
        banner,
        name: req.session.user.name,
        title: 'Edit Banner',
      });
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/banner');
    }
  },
  actionEdit: async (req, res) => {
    try {
      const {id} = req.params;
      const {bannerName, filenameImage} = req.body;

      await Banner.findOneAndUpdate({_id: id}, {bannerName, filenameImage});

      req.flash('alertMessage', 'Successfully update banner!');
      req.flash('alertStatus', 'success');

      res.redirect('/banner');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/banner');
    }
  },
  actionDelete: async (req, res) => {
    try {
      const {id} = req.params;

      await Banner.findOneAndRemove({_id: id});

      req.flash('alertMessage', 'Successfully delete banner!');
      req.flash('alertStatus', 'success');

      res.redirect('/banner');
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/banner');
    }
  },
};
