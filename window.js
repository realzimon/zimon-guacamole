global.Config = require('./config.json');
global.Vars = require('./modules/vars');
global.Clock = require('./modules/clock');
global.Quote = require('./modules/quotes');
global.Zivis = require('./modules/zivis');
global.Coffee = require('./modules/coffee');
global.mysqlService = require('./modules/mysqlService');

if (Config.menu.show) {
    global.Menu = require('./modules/menu');
}
if (Config.weather.show) {
    global.Weather = require('./modules/weather');
}
if (Config.catFacts.show) {
    global.Cat = require('./modules/cat');
}

function loadModules() {
    Clock.clock();
    if (Config.timer.show) {
        Clock.timer(Config.timer.intervalInMinutes, Config.timer.intervalInSeconds);
    }
    Quote.dailyQuote();
    Zivis.readZivis();
    Coffee.readCoffee();
    if (Config.menu.show) {
        Menu.startDailyMenu();
    }
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
