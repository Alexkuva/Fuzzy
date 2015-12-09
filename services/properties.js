var fs = require('fs');

var propModel = require('../models/propriete');

//var mongoose = require('mongoose');

//Connexion
/*var configDB = require('../config/database.js');
mongoose.connect(configDB.url); // connect to our database*/

//var exports.deleteProperty = function deleteProperty(id){}


exports.createProperty = function createProperty(nom, systeme, type, valeurs){
   console.log(nom, type, valeurs, valeurs.length);
	valeurs.sort();
	var property = {nom: nom, systeme:systeme, valeurs:valeurs, ordre:0};

	switch (type) {
		case "1":
			if(valeurs.length === 2){
			   console.error("Propriété type entre: nécessite 4 valeurs.");
			   var valeurs2 = resolveProperty(valeurs);
			   property.valeurs = valeurs2;
			}else if(valeurs.length === 3){
				console.error("Propriété type entre: nécessite 4 valeurs. Il y en a que 3.");
				process.exit();
			}
		break;
		case "2":
		   if(valeurs.length !== 2){
			   console.error("Propriété type au dessus: nécessite 2 valeurs.");
				var valeurs2 = getFuzzy(valeurs[0]);
			   property.valeurs = valeurs2;
			}
		break;
		case "3":
			if(valeurs.length !== 2){
			   console.error("Propriété type en dessous: nécessite 2 valeurs.");
			   var valeurs2 = getFuzzy(valeurs[0]);
			   property.valeurs = valeurs2;
		   }
		break;
	}

  var Prop1 = new propModel({
      systeme : property.systeme,
      ordre : property.ordre,
      nom : property.nom,
      valeurs : property.valeurs
    });

    Prop1.save(function (err) {
    if (err) { throw err; }
    console.log('Propriété ajoutée avec succès !');
    });

    return property;
}

//A terminer sur la mise en ordre(comparaison)
function sortProperty(systeme){
   propModel.find({systeme: systeme}, function (err, results){
      if (err) { throw err; }
      console.log(results);

      for(i in results){
              var min = [];
              min[i] = Math.min.apply(null, results[i].valeurs);
              console.log("ordre", results[i].ordre, "min", min);

              //results[i].ordre =
          }
      }).sort({ordre:1});
}

//sortProperties("Température");

function getFuzzy(valeur){
	var val = [];
	val[0]=valeur * 0.8;
	val[1]=valeur * 1.2;

	return val;
}

function resolveProperty(valeurs){
	if(valeurs.length === 2){
		var val = [];
		val.push(getFuzzy(valeurs[0])[0],getFuzzy(valeurs[0])[1]);
		val.push(getFuzzy(valeurs[1])[0],getFuzzy(valeurs[1])[1]);
	}
	return val;
}
