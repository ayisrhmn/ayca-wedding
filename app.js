var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var flash = require('connect-flash');
var session = require('express-session');
var cors = require('cors');

var userRouter = require('./app/user/router');
var dashboardRouter = require('./app/dashboard/router');
var bannerRouter = require('./app/banner/router');
var categoryRouter = require('./app/category/router');
var productImageRouter = require('./app/product-image/router');
var productRouter = require('./app/product/router');
var apiTestRouter = require('./app/api-test/router');
var landingPageRouter = require('./app/landing-page/router');

var app = express();
var URL = '/api/v1';
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(flash());
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/admin-lte',
  express.static(path.join(__dirname, '/node_modules/admin-lte/')),
);

app.use('/', userRouter);
app.use('/dashboard', dashboardRouter);
app.use('/banner', bannerRouter);
app.use('/category', categoryRouter);
app.use('/product-image', productImageRouter);
app.use('/product', productRouter);

// api
app.use(`${URL}`, apiTestRouter);
app.use(`${URL}/landingpage`, landingPageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
