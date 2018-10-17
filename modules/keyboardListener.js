var edit = false;

function getEdit() {
  return edit;
}

function setEdit(e) {
  edit = e;
}

$(function() {
  $(window).keypress(function(event) {
    if (!getEdit()) {
      var key = event.which;
      var char = String.fromCharCode(key);
      console.log("key: " + key + "; " + char);
      switch (char) {
        case "s":
          //s --> shuffle Zivis
          //readZivis();
          reloadTimer(10, 0);
          //console.log("'S'-Key pressed: Shuffle Zivis");
          break;
        case "m":
          //m --> mexico
          if (getSpanish()) {
            console.log("enough spanish for now.");
            showZivis();
            setSpanish(false);
          } else {
            console.log("spanish!");
            showSpanishZivis();
            setSpanish(true);
          }
          break;
        case "w":
          //w --> war
          if (getWar()) {
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
          console.log("edit");
          editZivi();
          //editQuote();
          break;
        default:
          break;
      }
    }
  });
});

function restartSystem() {
  console.log('chefzivi ended war');
  setWar(false);
  timer(10, 0);
  readZivis();
}

function startWar() {
  console.log('chefzivi called martial law');
  setWar(true);
  showMartialLaw();
}
