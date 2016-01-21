var fuzzylogic = require('fuzzylogic');
var mongoose = require('mongoose');
var ruleModel = require('../models/regle');
var propModel = require('../models/propriete');

//Adapter la logique floue à chaque règle
exports.fuzzifyRules = function fuzzifyRules(systeme, signal,callback){
    propModel.find({'systeme':systeme},function (err, props){
        //console.log(props);
        ruleModel.find({'systeme': systeme}, function(err, rules){
          var fuzzyArray = [];
          var resultArray = [];
          rules.forEach(function(rule, indexR, rules){
            console.log('rule', rule);
             props.forEach(function(prop, indexP, props){
                if(rule.condition === prop.nom){
                 for (val in prop.valeurs){
                     prop.valeurs[val] = parseInt(prop.valeurs[val]);
                 }
                 console.log("prop", prop, props.length);
                 if(prop.ordre === 1){
                     //console.log("Premiere prop", prop);
                     fuzzyArray.push(fuzzylogic.reverseGrade(signal.value, prop.valeurs[0],prop.valeurs[1],prop.valeurs[2],prop.valeurs[3]));
                 }else if(prop.ordre !== 1 && prop.ordre !== props.length){
                     //console.log("milieu prop", prop);
                     fuzzyArray.push(fuzzylogic.trapezoid(signal.value, prop.valeurs[0],prop.valeurs[1],prop.valeurs[2],prop.valeurs[3]));
                 }else if(prop.ordre === props.length){
                     //console.log("Dernière prop", prop);
                     fuzzyArray.push(fuzzylogic.grade(signal.value, prop.valeurs[0],prop.valeurs[1],prop.valeurs[2]));
                }
                 //console.log("results Array", fuzzyArray);
             }
            });
            var result = {prop: rule.condition, pourcent: fuzzyArray[indexR], action:rule.consequence};
            resultArray.push(result);
            console.log("results", result, resultArray);
          });
          callback(resultArray);
        });
    });
}