const ip = "http://localhost:9009/zimon/database/";
const filter=['', 'grayscale(100%)', 'blur(5px)'];
const coffeeBeanTemplate="<img src='assets/coffee.png' id='coffee-bean' height='25' />";

//Dynamic
var end;
var spanish = false;
var edit = false;
var war = false;
var listen=false;
var wrongClock=false;
var selectedFilter=0;
var coffee=0;

module.exports.end = end;
module.exports.war = war;
module.exports.edit = edit;
module.exports.spanish = spanish;
module.exports.ip = ip;
module.exports.coffeeBeanTemplate = coffeeBeanTemplate;
module.exports.coffee = coffee;
module.exports.listen = listen;
module.exports.wrongClock = wrongClock;
module.exports.filter = filter;
module.exports.selectedFilter = selectedFilter;
