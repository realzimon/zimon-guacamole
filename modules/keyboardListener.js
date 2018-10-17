$(function() {
$(window).keypress(function(e) {
    var ev = e || window.event;
    var key = ev.keyCode || ev.which;
    switch (key) {
      case 115:
        //s --> shuffle Zivis
        //readZivis();
        reloadTimer(10, 0);
        //console.log("'S'-Key pressed: Shuffle Zivis");
        break;
      default:
        break;
    }
  });
});
