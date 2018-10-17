//every 6 hours
var interval = setInterval(getTagesFlade, 21600000);

function getTagesFlade() {
  //Schaut nach der Zelle neben Berggasse
  $.ajax({
      url: "https://www.fladerei.com/dyn_inhalte/tagesflade.html",
    })
    .done(function(data) {
      var berggasseStart = data.indexOf("Berggasse");
      var fladeStart = data.indexOf("<td>", berggasseStart) + 4;
      var fladeEnd = data.indexOf("</td>", fladeStart);
      var tagesflade = data.substr(fladeStart, (fladeEnd - fladeStart));
      $("#flade").html(tagesflade);
    });
}

function reloadTagesFlade() {
  //Stop current loop
  clearInterval(interval);
  interval = setInterval(getTagesFlade, 21600000);
}
