function getTagesFlade() {
  //Schaut nach der Zelle neben Berggasse
  $.ajax({
    url: "https://www.fladerei.com/dyn_inhalte/tagesflade.html",
  })
    .done(function( data ) {
      var berggasseStart =data.indexOf("Berggasse");
      var fladeStart=data.indexOf("<td>", berggasseStart)+4;
      var fladeEnd=data.indexOf("</td>", fladeStart);
      var tagesflade=data.substr(fladeStart, (fladeEnd-fladeStart));
      $("#flade").html(tagesflade);
        console.log( "Sample of data:", tagesflade );
    });
}
