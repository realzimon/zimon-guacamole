global.Config = require('./config.json');
global.Vars = require('./modules/vars');
global.Menu = require('./modules/menu');
global.Clock = require('./modules/clock');
global.Quote = require('./modules/quotes');
global.Zivis = require('./modules/zivis');
global.Coffee = require('./modules/coffee');
global.mysqlService = require('./modules/mysqlService');

if (Config.weather.show) {
    global.Weather = require('./modules/weather');
}
if (Config.catFacts.show) {
    global.Cat = require('./modules/cat');
}

function loadModules() {
    Menu.getDailyMenu();
    Clock.clock();
    Clock.timer(10, 0);
    Quote.dailyQuote();
    Zivis.readZivis();
    Coffee.readCoffee();
    if (Config.weather.show) {
        Weather.showWeather();
    }
    if (Config.catFacts.show) {
        Cat.showCatFact();
    }
}

$(() => {
    loadModules();
});
