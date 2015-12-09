var mongoose = require('mongoose');

// define the schema for our user model
var systemeSchema = mongoose.Schema({
    nom: String,
    quantite : String,
    bornMin : Number,
    bornMax : Number,
    prop : [String]
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Systeme', systemeSchema);