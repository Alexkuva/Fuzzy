var fuzzylogic = require('fuzzylogic');
var mongoose = require('mongoose');
var ruleModel = require('../models/regle');
var propModel = require('../models/propriete');

//Adapter la logique floue à chaque règle
function fuzzifyRules(systeme, signal){
    propModel.find({'systeme':systeme},function (err, props){
      console.log(props);
      
     
      foreach(prop in props){
         fuzzylogic.trapezoid(valeur signal, prop, pri, é, té);
        push tablo
      }
      
    });
    // Récupérer toutes les règles et adapter trapèzes et 1 grade + 1 reversegrade.

    if(regle.condition.ordre)
        fuzzylogic.trapezoid
}

//Décision floue sur la valeur du signal
function fuzzy(signal){
  ruleModel.find({'systeme':systeme},function (err, rules){
        console.log(rules);
        
        fuzzylogic.trapezoid(threat, 20, 30, 90, 100);
      });


  return result;
}

function getResult(){

    //moyenne résultat renvoyé par le socket + nouveau résultat

    //appeler cette fonction avec le socket

    return result;
}




var threatCalc = function(threat) {
    var probabNoAttack          = fuzzylogic.triangle(threat, 0, 20, 40);
    var probabNormalAttack      = 
    var OkAttack      = fuzzylogic.trapezoid(threat, 20, 50, 80, 100);
    var probabEnragedAttack     = fuzzylogic.grade(threat, 90, 100);
    console.log('Threat: ' + threat);
    console.log('no attack: '       + probabNoAttack);
    console.log('normal attack: '   + probabNormalAttack);
    console.log('OK attack: '   + OkAttack);
    console.log('enraged attack: '  + probabEnragedAttack);
};

threatCalc(10);
threatCalc(20);
threatCalc(30);
threatCalc(50);
threatCalc(60);