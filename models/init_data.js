/*
var dataBase = require('../config/database.js');
//var PropModel = require('../DAO/propertiesDAO');

var tmp={
    systeme : 'Température',
    ordre : 1,
    nom : 'Très Froid',
    valeurs : [-20, -10, -8]
}
var rule={
    systeme : ["Température","Humidité"],
    condition : ["Chaud","Très humide"],
    conséquence : "Diminuer de 5°"
}


var mongoose = require('mongoose');
var Prop = require('../models/propriete')*/


//var SystemeModel = require('../models/systeme');
/*
SystemeModel.find({systeme:"Humidité"},function (err, comms) {
    if (err) { throw err; }
    // comms est un tableau de hash
    console.log(comms);
}).sort({ordre:1});*/

/*var Prop1 = new Prop({ 
    systeme : 'Humidité' ,
    ordre : 5,
    nom : 'Très Chaud',
    valeurs : [33,35,50]
});
Prop1.save(function (err) {
  //if (err) { throw err; }
  console.log('Proposition 1 ajouté avec succès !');
});*//*
Prop.find({systeme:"Humidité"}, function (err, comms){
      if (err) { throw err; }
      // comms est un tableau de hash
  console.log(comms);
}).sort({ordre:1});
*/

/*
var Prop1 = new PropModel({ 
    systeme : system.id,
    ordre : propriete.ordre,
    nom : propriete.nom,
    valeurs : propriete.valeurs
  });
*/



/*
  var Sys = new SystemeModel({ 
    nom: 'Température',
    quantite : '°',
    bornMin : -20,
    bornMax :  40
  });
  Sys.save(function (err) {
  //if (err) { throw err; }
  console.log('Système ajoutée avec succès !');
  });

  var Prop1 = new PropModel({ 
      systeme : Sys,
      ordre : 1,
      nom : 'Très Froid',
      valeurs : [-20, -10, -8]
  });
  Prop1.save(function (err) {
    //if (err) { throw err; }
    console.log('Propriété ajoutée avec succès !');
    console.log(Prop1);
  });
*/

/*
var r = sys.create(systeme);
prop.create(tmp,r);
*/

var mongoose = require('mongoose');

//Connexion
var configDB = require('../config/database.js');
mongoose.connect(configDB.url); // connect to our database

// Création du Model pour les propriétés
var Prop = require('../models/propriete');


// On crée les instances du Model
var Prop1 = new Prop({ 
    systeme : 'Température' ,
    ordre : 1,
    nom : 'Très Froid',
    valeurs : ["-20°", "-10°", "-8°"]
});

var Prop2 = new Prop({ 
    systeme : 'Température' ,
    ordre : 2,
    nom : 'Froid',
    valeurs : [ "-10°", "-8°","8°","10°"]
});

var Prop3 = new Prop({ 
    systeme : 'Température' ,
    ordre : 3,
    nom : 'Modéré',
    valeurs : ["8°","10°","25°","27°"]
});

var Prop4 = new Prop({ 
    systeme : 'Température' ,
    ordre : 4,
    nom : 'Chaud',
    valeurs : ["25°","27°","33°","35°"]
});

var Prop5 = new Prop({ 
    systeme : 'Température' ,
    ordre : 5,
    nom : 'Très Chaud',
    valeurs : ["33°","35°","40°"]
});


var Prop6 = new Prop({ 
    systeme : 'Humidité' ,
    ordre : 1,
    nom : 'Pas Humide',
    valeurs : ["0%","25%","27%"]
});

var Prop7 = new Prop({ 
    systeme : 'Humidité' ,
    ordre : 2,
    nom : 'Peu Humide',
    valeurs : [ "25%","27%","50%","52%"]
});

var Prop8 = new Prop({ 
    systeme : 'Humidité' ,
    ordre : 3,
    nom : 'Humide',
    valeurs : ["50%","52%","75%","77%"]
});

var Prop9 = new Prop({ 
    systeme : 'Humidité' ,
    ordre : 4,
    nom : 'Très Humide',
    valeurs : ["75%","77%","100%"]
});




// On le sauvegarde dans MongoDB !

Prop1.save(function (err) {
  //if (err) { throw err; }
  console.log('Proposition 1 ajouté avec succès !');
});
Prop2.save(function (err) {
  console.log('Proposition 2 ajouté avec succès !');
});
Prop3.save(function (err) {
  console.log('Proposition 3 ajouté avec succès !');
});
Prop4.save(function (err) {
  console.log('Proposition 4 ajouté avec succès !');
});
Prop5.save(function (err) {
  console.log('Proposition 5 ajouté avec succès !');
});
Prop6.save(function (err) {
  console.log('Proposition 6 ajouté avec succès !');
});
Prop7.save(function (err) {
  console.log('Proposition 7 ajouté avec succès !');
});
Prop8.save(function (err) {
  console.log('Proposition 8 ajouté avec succès !');
});
Prop9.save(function (err) {
  console.log('Proposition 9 ajouté avec succès !');
});