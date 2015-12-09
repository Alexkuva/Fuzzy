var fuzzylogic = require('fuzzylogic');

//Adapter la logique floue à chaque règle
function fuzzifyRules(){



    // Récupérer toutes les règles et adapter trapèzes et 1 grade + 1 reversegrade.

    if(regle.condition.ordre)
        fuzzylogic.trapezoid
}

//Décision floue sur la valeur du signal
function fuzzy(signal){



    return result;
}

function getResult(){

    //moyenne résultat renvoyé par le socket + nouveau résultat

    //appeler cette fonction avec le socket

    return result;
}




var threatCalc = function(threat) {
    var probabNoAttack          = fuzzylogic.triangle(threat, 0, 20, 40);
    var probabNormalAttack      = fuzzylogic.trapezoid(threat, 20, 30, 90, 100);
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