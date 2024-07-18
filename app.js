var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressSession = require("express-session");//auth code
var flash = require("connect-flash");//For flash messages

var indexRouter = require('./routes/index');//index route
var usersRouter = require('./routes/users');//user route
var passport = require("passport");//auth code

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(flash());//flash middleware
app.use(expressSession({//auth code
  resave:false,
  saveUninitialized:false,
  secret:"My first backend project-Pinterest",
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(usersRouter.serializeUser());
passport.deserializeUser(usersRouter.deserializeUser());//auth code

app.use(logger('dev'));
app.use(express.json());//to read json 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
