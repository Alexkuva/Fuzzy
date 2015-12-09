var mongoose = require('mongoose');
//var systemeModele = require('./systeme.js')

// define the schema for our user model
var propSchema = mongoose.Schema({
        systeme : String,
        ordre : Number,
        nom : String,
        valeurs : []
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Prop', propSchema);