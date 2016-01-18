var fs = require('fs');
var mongoose = require('mongoose');
var propModel = require('../models/propriete');


//var exports.deleteProperty = function deleteProperty(id){}
var systemes = {
  "Température":{
    "unité":"°C",
    "min":"-20",
    "max":"40"
 },
 "Humidité":{
    "unité":"%",
    "min":"0",
    "max":"100"
 }
}

exports.createProperty = function createProperty(nom, systeme, type, valeurs){
    propModel.count({systeme: systeme}, function(err, count) {
      var property = {nom: nom, systeme:systeme, valeurs:[], ordre:0};
      property.ordre = count+1;
      switch (type) {
        case "1":
            property.valeurs.push(systemes[systeme].min);
            if(valeurs.length === 1){
              var valeurs2 = getFuzzy(valeurs);
              property.valeurs.push(valeurs2[0],valeurs2[1]);
            }else if(valeurs.length === 2){
              property.valeurs.push(valeurs[0],valeurs[1]);
            }else{
              console.error("Propriété type  minimum: nécessite 1 ou 2 valeurs.");
            }
            
        break;
        case "2":
            if(valeurs.length !==4){
              console.error("Propriété type intermédiaire: nécessite 4 valeurs.");
            }else{
              var tmpValeur = valeurs;
              if(valeurs.indexOf("min2") !== -1){
                var tmp0 = getFuzzy(tmpValeur[0]);
                valeurs[0]=tmp0[0];
                valeurs[1]=tmp0[1];
                console.log("min2 !", tmpValeur);
              }
              if(valeurs.indexOf("max2") !== -1){
                var tmp1 = getFuzzy(tmpValeur[2]);
                valeurs[2]=tmp1[0];
                valeurs[3]=tmp1[1];
                console.log("max2 !", tmpValeur);
              }
              property.valeurs = tmpValeur;
            }
        break;
        case "3":
            if(valeurs.length === 1){
              var valeurs3 = getFuzzy(valeurs);
              property.valeurs.push(valeurs3[0],valeurs3[1]);
            }else if(valeurs.length === 2){
              property.valeurs.push(valeurs[0],valeurs[1]);
            }else{
              console.error("Propriété type  minimum: nécessite 1 ou 2 valeurs.");
            }
        property.valeurs.push(systemes[systeme].max);
        break;
      }
      console.log("type", type, "valeurs", property.valeurs);
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
    });
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
	val[0]=(Math.floor(valeur * 0.9)).toString();
	val[1]=(Math.ceil(valeur * 1.1)).toString();
    
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
