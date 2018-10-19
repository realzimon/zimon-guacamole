const Flade = require('./modules/flade.js')
const Clock = require('./modules/clock.js')
const Quote = require('./modules/quotes.js')
const Zivis = require('./modules/zivis.js')

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
