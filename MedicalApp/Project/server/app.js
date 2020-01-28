var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.js');
var apiRouter = require('./routes/api.js');
var drugReceipt = require('./routes/drugReceipt.js');

const bodyParser = require('body-parser');

var app = express();

//for NSC Temp
// var mongo = require('mongodb').MongoClient;
// var url = 'mongodb+srv://anajak:park4568@cluster0-r6fmo.mongodb.net/medicallink?retryWrites=true&w=majority'

// app.get('/checkuser', (req,res) => {
//     mongo.connect(url, (err, db) => {
//       var collection = db.collection('hospital');
//       collection.find({}).toArray((x, data) => {
//         res.send(data);
//       })
//     })
// })

// app.post('/registuser', (req,res) => {
//   mongo.connect(url, (err, db) => {
//     var collection = db.collection('hospital');
//     var newuser = {
//       username: req.body.username,
//       password: req.body.password
//     }
//     collection.insert(newuser, (x, data) => {
//         res.send(data);
//     })
//   })
// })

app.use(cors({origin: true, credentials: true}));
app.use(bodyParser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/drugReceipt',drugReceipt);

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
