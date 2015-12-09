var express = require('express');
var path = require('path');
var router = express.Router();


// Inclusion de Mongoose
var mongoose = require('mongoose');
var PropModel = require('../models/propriete');

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'home.html'));
});

router.get('/liste', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'regles.html'));
});

router.get('/resultat', function(req, res, next) {
  var findInt;
  var findOut;
  PropModel.find({systeme:"Température"}, function (err, comms) {
    if (err) { throw err; }
    // comms est un tableau de hash
    findInt = comms;
    //console.log(findInt);
    PropModel.find({systeme:"Humidité"}, function (err, comms){
      if (err) { throw err; }
      // comms est un tableau de hash
      findOut = comms;
      //console.log(comms);
      res.render( 'info', {
        propTempOut : findOut,
        propTempInt : findInt
      });
    }).sort({ordre:1});
}).sort({ordre:1});
});


module.exports = router;
