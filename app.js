var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var regles = require('./routes/regles');
var proprietes = require('./routes/proprietes');

var signalGen = require('./signal/signalGenerator.js')
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


var http = require('http').Server(app);
var io = require('socket.io')(http);

// configuration ===============================================================
var configDB = require('./config/database.js');
mongoose.connect(configDB.url); // connect to our database

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/regle', regles);
app.use('/propriete', proprietes);

io.on('connection', function(socket){
  
  socket.on('heySignal',function(systeme){
    console.log('heySignal');
    var signal = signalGen.chooseSignal(systeme)();
    signal.systeme = systeme;
    socket.emit('signalGenerated', signal);
    //fuzzifyRules(systeme, signal);
    //calcul reponse
   // socket.emit('result', reponse);
  });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


//module.exports = app;
http.listen(3000,function(){
  console.log('serverListen '+3000);
});