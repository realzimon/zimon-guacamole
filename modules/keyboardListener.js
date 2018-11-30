$(function() {
  $(window).keypress(function(event) {
    if (!Vars.edit) {
      let key = event.which;
      let char = String.fromCharCode(key);
      console.log("key: " + key + "; " + char);
      switch (char) {
        case "b":
          //b --> no one knows why 'b' but its the filter
          if ((Vars.selectedFilter + 1) === Vars.filter.length) {
            Vars.selectedFilter = 0;
          } else {
            Vars.selectedFilter++;
          }
          $("body").css('filter', Vars.filter[Vars.selectedFilter]);
          break;
        case "c":
          Coffee.addCoffee();
          break;
        case "l":
          //l --> listen mode
          if (Vars.listen) {
            $(".overlay").removeClass('overlay-open');
            Vars.listen = false;
          } else {
            $(".overlay").addClass('overlay-open');
            Vars.listen = true;
          }
          break;
        case "s":
          //s --> shuffle Zivis
          Clock.reloadTimer(10, 0);
          break;
        case "m":
          //m --> mexico
          Vars.spanish = !Vars.spanish;
          Zivis.showZivis();
          break;
        case "w":
          //w --> war
          if (Vars.war) {
            //restart sytsem
            let answer = confirm("U sure u want end war?");
            if (answer) {
              restartSystem();
            }
          } else {
            //Start war
            let answer = confirm("We start a war. U sure u want do?");
            if (answer) {
              startWar();
            }
          }
          break;
        case "e":
          //e --> edit
          Zivis.editZivi();
          Quote.editQuote();
          break;
        case "f":
          //f --> reload menu
          Menu.getDailyMenu();
          break;
        default:
          break;
      }
    }
  });
});

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
