var mongoose = require('mongoose');
//var PropModel = require('./propriete'); 

// define the schema for our user model
var regleSchema = mongoose.Schema({
        systeme : String,
        condition : String,
        consequence : String
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Regle', regleSchema);