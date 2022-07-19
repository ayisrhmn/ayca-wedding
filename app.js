var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var cors = require('cors');

var apiTestRouter = require('./app/api-test/router');
var confirmationRouter = require('./app/confirmation/router');
var greetingsRouter = require('./app/greetings/router');

var app = express();
var URL = '/api/v1';
app.use(cors());

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// api
app.use(`${URL}`, apiTestRouter);
app.use(`${URL}/confirmation`, confirmationRouter);
app.use(`${URL}/greetings`, greetingsRouter);

// catch 404 and forward to error handler
app.use(function (_, _, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, _) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
