var express = require('express');
var path = require('path');
var router = express.Router();

sys = ['Humidité','Température'];

// Inclusion de Mongoose
var mongoose = require('mongoose');
var PropModel = require('../models/propriete');
var RuleModel = require('../models/regle')

router.get('/', function(req, res, next) {
  PropModel.find({}, function (err, comms) {
    if (err) { throw err; }
    
    res.render( 'home', {
      prop : comms,
      system: sys
    });
  }).sort({systeme:1});
});

router.get('/liste', function(req, res, next) {
  PropModel.find({}, function (err, comms) {
    if (err) { throw err; }
    RuleModel.find({}, function (err, coms) {
      if (err) { throw err; }
      res.render( 'regles', {
        prop : comms,
        rule: coms,
      });
    });
  }).sort({systeme:1});
});

router.get('/old_Liste', function(req, res, next) {
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
