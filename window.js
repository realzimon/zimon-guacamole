global.Menu = require('./modules/menu');
global.Clock = require('./modules/clock');
global.Quote = require('./modules/quotes');
global.Zivis = require('./modules/zivis');
global.KeyBinds = require('./modules/keyboardListener');
global.Vars = require('./modules/vars');
global.mysqlService = require('./modules/mysqlService');

function loadModules(){
  Menu.getDailyMenu();
  Clock.clock();
  Clock.timer(10,0);
  Quote.dailyQuote();
  Zivis.readZivis();
  // mysqlService.mysqlConnect();
}

$(() => {
  loadModules();
})
