global.Config = require('./config.json');
global.Vars = require('./modules/vars');
global.Menu = require('./modules/menu');
global.Clock = require('./modules/clock');
global.Quote = require('./modules/quotes');
global.Zivis = require('./modules/zivis');
global.Coffee = require('./modules/coffee');
global.mysqlService = require('./modules/mysqlService');
global.Weather = require('./modules/weather');
global.Cat = require('./modules/cat');

function loadModules(){
  Menu.getDailyMenu();
  Clock.clock();
  Clock.timer(10,0);
  Quote.dailyQuote();
  Zivis.readZivis();
  Coffee.readCoffee();
  Weather.showWeather();
    Cat.showCatImage();
}

$(() => {
  loadModules();
});
