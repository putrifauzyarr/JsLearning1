var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register');

// Import database services
const sqliteDbService = require('./dbservices/sqlite');
const prismaDbService = require('./dbservices/prisma');

var app = express();

// Initialize databases
Promise.all([
  sqliteDbService.initDatabase(),
  prismaDbService.initDatabase()
]).catch(err => {
  console.error('Failed to initialize database:', err);
  process.exit(1);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/register', registerRouter);

// Import dan gunakan route Prisma jika file ada
try {
  var registerPrismaRouter = require('./routes/register-prisma');
  var usersPrismaRouter = require('./routes/users-prisma');
  app.use('/register-prisma', registerPrismaRouter);
  app.use('/users-prisma', usersPrismaRouter);
  console.log('Prisma routes loaded');
} catch (error) {
  console.log('Prisma routes not available yet');
}

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

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\nClosing database connections...');
  await Promise.all([
    sqliteDbService.closeDatabase().catch(console.error),
    prismaDbService.closeDatabase().catch(console.error)
  ]);
  process.exit(0);
});

module.exports = app;