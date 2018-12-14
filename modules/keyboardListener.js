function restartSystem() {
    console.log('chefzivi ended war');
    Vars.war = false;
    Clock.timer(10, 0);
    Zivis.readZivis();
    Quote.reloadDailyQuote();
}

function startWar() {
    console.log('chefzivi called martial law');
    Vars.war = true;
    Zivis.showMartialLaw();
}

module.exports.restartSystem = restartSystem;