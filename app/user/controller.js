const User = require('./model');
const bcrypt = require('bcryptjs');

module.exports = {
  viewSignIn: async (req, res) => {
    try {
      const alertMessage = req.flash('alertMessage');
      const alertStatus = req.flash('alertStatus');

      const alert = {message: alertMessage, status: alertStatus};

      if (req.session.user === null || req.session.user === undefined) {
        res.render('user/signin', {
          alert,
          title: 'Sign In',
        });
      } else {
        res.redirect('/dashboard');
      }
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/');
    }
  },
  actionSignIn: async (req, res) => {
    try {
      const {username, password} = req.body;
      const check = await User.findOne({email: username});

      if (check) {
        const checkPassword = await bcrypt.compare(password, check.password);

        if (checkPassword) {
          req.session.user = {
            id: check._id,
            username: check.username,
            name: check.name,
          }
          res.redirect('/dashboard');
        } else {
          req.flash('alertMessage', 'Your password is not correct!');
          req.flash('alertStatus', 'danger');

          res.redirect('/');
        }
      } else {
        req.flash('alertMessage', 'Username is not correct!');
        req.flash('alertStatus', 'danger');

        res.redirect('/');
      }
    } catch (err) {
      req.flash('alertMessage', `${err.message}`);
      req.flash('alertStatus', 'danger');

      res.redirect('/');
    }
  },
  actionLogout: (req, res) => {
    req.session.destroy();
    res.redirect('/');
  }
};
