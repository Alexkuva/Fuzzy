var regleModel = require('../models/regle');
var mongoose = require('mongoose');

exports.createRule = function createRule(systeme,condition,resultat) {
    var rules = new regleModel({
            systeme: systeme,
            condition: condition,
            consequence:resultat
        });
    rules.save(function (err) {
        if (err) {
            throw err;
        }
        console.log('La règle a bien été prise en compte !');
    });
 }

module.export
