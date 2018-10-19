$(function() {
      $(window).keypress(function(event) {
          if (!Vars.edit) {
            var key = event.which;
            var char = String.fromCharCode(key);
            console.log("key: " + key + "; " + char);
            switch (char) {
              case "s":
                //s --> shuffle Zivis
                //readZivis();
                Clock.reloadTimer(10, 0);
                //console.log("'S'-Key pressed: Shuffle Zivis");
                break;
              case "m":
                //m --> mexico
                if (Vars.spanish) {
                  Vars.spanish = false;
                } else {
                  Vars.spanish = true;
                }
                Zivis.showZivis();
                break;
              case "w":
                //w --> war
                if (Vars.war) {
                    //restart sytsem
                    var answer = confirm("U sure u want end war?");
                    if (answer) {
                      restartSystem();
                    }
                  } else {
                    //Start war
                    var answer = confirm("We start a war. U sure u want do?");
                    if (answer) {
                      startWar();
                    }
                  }
                  break;
                  case "e":
                  //e --> edit
                  console.log("edit"); Zivis.editZivi(); Quote.readQuotes();
                  break;

                  case "f":
                  //f --> reload flade
                  Flade.reloadTagesFlade();
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
