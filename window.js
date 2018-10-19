global.Flade = require('./modules/flade');
global.Clock = require('./modules/clock');
global.Quote = require('./modules/quotes');
global.Zivis = require('./modules/zivis');
global.KeyBinds = require('./modules/keyboardListener');
global.Vars = require('./modules/vars');

function loadModules(){
  Flade.getTagesFlade();
  Clock.clock();
  Clock.timer(10,0);
  Quote.dailyQuote();
  Zivis.readZivis();
}

$(() => {
  loadModules();
})
