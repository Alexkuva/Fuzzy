var express = require('express');
var router = express.Router();

var properties = require('../services/properties');


router.post('/create', function(req, res, next) {
    var nom = req.body.nom;
    var systeme = req.body.systeme;
    var type = req.body.type;
    var valeurs = [];
    
    if(type === "1"){
        valeurs.push(req.body.valMin1);
        if(req.body.valMin2 !== ""){
            valeurs.push(req.body.valMin2);
        }
    }else if (type === "2"){
        valeurs.push(req.body.valMin1);
        if(req.body.valMin2 !== ""){
            valeurs.push(req.body.valMin2);
        }else{
          valeurs.push("min2")
        }
        valeurs.push(req.body.valMax1);
        if(req.body.valMax2 !== ""){
            valeurs.push(req.body.valMax2);
        }else{
          valeurs.push("max2")
        }
    }else if(type === "3"){
        valeurs.push(req.body.valMax1);
        if(req.body.valMax2 !== ""){
            valeurs.push(req.body.valMax2);
        }
    }else{
        console.error("Mauvais type pour le formulaire de création de propriété.");
        process.exit();
    }
    console.log(nom,systeme, type, valeurs);
    properties.createProperty(nom, systeme, type, valeurs);
    res.redirect("/");
});

router.post('/delete', function(req, res, next) {

});

module.exports = router;