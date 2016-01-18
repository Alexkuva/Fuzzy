var express = require('express');
var router = express.Router();

var rules = require('../services/rules');
var mongoose = require('mongoose');
var RuleModel = require('../models/regle')


router.post('/create', function(req, res, next) {
  var systeme = req.body.systeme;
  if(systeme === 'Humidité'){
    var condition = req.body.condition1;
  }
  if(systeme === 'Température'){
    var condition = req.body.condition2;
  }
  var consequence = req.body.consequence;
  rules.createRule(systeme,condition,consequence);
  res.redirect('/');
});

router.post('/delete', function(req, res, next) {
  var ObjectId = mongoose.Types.ObjectId;
  RuleModel.remove({ '_id': ObjectId(req.body.id+'') }, function (err) {
    if (err) return handleError(err);
    // removed!
  });
  res.redirect('/liste');
});

module.exports = router;