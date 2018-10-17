var ziviTemplate = "<div class='col-md-2' id='zivi0'><div class='card mb-2 box-shadow'><img id='ziviimage' class='card-img-top' src='fisch.jpg' alt='Card image cap'><div id='zivibg' class='card-body'><p class='card-text' id='ziviname'>ZiviName2</p></div></div></div>"
var zivis;
var spanish = false;

function getSpanish() {
  return spanish;
}

function setSpanish(s) {
  spanish = s;
}

function readZivis() {
  $.ajax({
      url: "http://localhost/zimon/database/getZivis.php",
    })
    .done(function(json) {
      zivis = $.parseJSON(json);
      shuffleZivis();
    });
}

function shuffleZivis() {
  var lastFirst = zivis[0].name;
  while (zivis[0].name == lastFirst) {
    //Shuffles zivi array
    var currentIndex = zivis.length,
      temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = zivis[currentIndex];
      zivis[currentIndex] = zivis[randomIndex];
      zivis[randomIndex] = temporaryValue;
    }
    if (zivis[0].name == lastFirst) {
      console.log("shuffle incorrect; shuffle again");
    }
  }
  if (getSpanish()) {
    showSpanishZivis();
  } else {
    showZivis();
  }
}

function clearZivis() {
  //Remove fields
  $("#zivis").empty();
}

function showZivis() {
  clearZivis();

  for (i = 0; i < zivis.length; i++) {
    if (i == 0) {
      //Insert first one
      $("#zivis").prepend(ziviTemplate);
    } else {
      $("#zivi" + (i - 1)).clone().prop('id', 'zivi' + i).appendTo("#zivis");
    }
    //print content
    $("#zivi" + i).find("#ziviname").html(zivis[i].name);
    $("#zivi" + i).find("#ziviimage").attr("src", zivis[i].bild);
    $("#zivi" + i).find("#zivibg").css({
      backgroundColor: zivis[i].farbe
    });
  }
}

function showSpanishZivis() {
  clearZivis();

  for (i = 0; i < zivis.length; i++) {
    if (i == 0) {
      //Insert first one
      $("#zivis").prepend(ziviTemplate);
    } else {
      $("#zivi" + (i - 1)).clone().prop('id', 'zivi' + i).appendTo("#zivis");
    }
    //print content
    $("#zivi" + i).find("#ziviname").html(zivis[i].spanish);
    $("#zivi" + i).find("#ziviimage").attr("src", zivis[i].bild);
    $("#zivi" + i).find("#zivibg").css({
      backgroundColor: zivis[i].farbe
    });
  }
}
