$(function() {
  $(window).keypress(function(e) {
    var ev = e || window.event;
    var key = ev.keyCode || ev.which;
    //console.log("key: "+key);
    switch (key) {
      case 115:
        //s --> shuffle Zivis
        //readZivis();
        reloadTimer(10, 0);
        //console.log("'S'-Key pressed: Shuffle Zivis");
        break;
      case 109:
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
      default:
        break;
    }
  });
});
