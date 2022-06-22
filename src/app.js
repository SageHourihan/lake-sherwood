var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { auth, requiresAuth } = require('express-openid-connect');

require('dotenv').config()

console.log(process.env);

// requiring database connection
var db = require("./config/db")

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var boatRampRouter = require('../routes/boat_ramp')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "..", "public")));

// AUTH
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: '2709641849f611c7b0ce99dce50b98d43842a7307d50afe05a1edc66b2f07975',
  baseURL: 'http://localhost:3000',
  clientID: '6hZk70Nnk8r8OnSshgTyh8WzZaVKVSyC',
  issuerBaseURL: 'https://dev-dzv70nbk.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// TODO: add authentication
app.use('/boat_ramp', requiresAuth(), boatRampRouter)

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
