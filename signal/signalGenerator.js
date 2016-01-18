var date = new Date();
var getNow = require('./time');

var signal = {
	 timestamp: getNow.now(),
	 value : null
};

var sendSignal100 = function sendSignal100(){
	signal.value = Math.floor(Math.random()*100);
	return signal;
};
var sendSignalTemperature = function sendSignalTemperature(){
 	signal.value = Math.floor((Math.random() * 60) - 20);
 	return signal;
};

exports.chooseSignal = function chooseSignal(systeme){
  if(systeme === "Température"){
    return sendSignalTemperature;
  }
  if(systeme === "Humidité"){
    return sendSignal100;
  }
}

module.export