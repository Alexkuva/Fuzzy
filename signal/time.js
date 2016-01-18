exports.now = function getNow(){
   var currentDate = new Date();
   currentDate.setDate(currentDate.getDate());
   var hour = currentDate.getHours() < 10 ? '0' + currentDate.getHours() : currentDate.getHours();
   var minute = currentDate.getMinutes();
   var decalage = minute + 5;
   minute=minute< 10 ? '0' + minute : minute;
   var sec = currentDate.getSeconds();
   var timestamp= hour + ":" + minute + ":" + sec;
   return timestamp;
};
