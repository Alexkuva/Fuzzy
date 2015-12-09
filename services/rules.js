var regleModel = require('../models/regles');
var mongoose = require('mongoose');

//Connexion
var configDB = require('../config/database.js');
mongoose.connect(configDB.url); // connect to our database

exports.createRule = function createRule(systeme,condition,resultat) {
    var rules = new regleModel({
            systeme: systeme,
            condition: condition,
            resultat:resultat,
        });
    rules.save(function (err) {
        if (err) {
            throw err;
        }
        console.log('La règle a bien été prise en compte !');
    });
 });

module.export
