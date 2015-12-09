var express = require('express');
var router = express.Router();

var properties = require('../services/properties');


router.post('/create', function(req, res, next) {
    var nom = req.body.nom;
    var systeme = req.body.systeme;
    var type = req.body.selection;
    var valeurs = [];

    if(type === 1){
        valeurs.push(req.body.valMin1);
        if(req.body.valMin2 !== ""){
            valeurs.push(req.body.valMin2);
        }
        if(req.body.valMax1 !== ""){
            valeurs.push(req.body.valMax1);
        }

    }else if (type === 2 || type === 3) {
        valeurs.push(req.body.valMin);
        if(req.body.valMax !== ""){
            valeurs.push(req.body.valMax);
        }
    }else{
        console.error("Mauvais type pour le formulaire de création de propriété.");
        process.exit();
    }
  
    console.log(nom,systeme, type, valeurs);
    properties.createProperty(nom, systeme, type, valeurs)
});

router.post('/delete', function(req, res, next) {

});

module.exports = router;