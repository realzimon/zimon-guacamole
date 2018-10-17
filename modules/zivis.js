var ziviTemplate = "<div class='col-md-2' id='zivi0'><div class='card mb-2 box-shadow'><img id='ziviimage' class='card-img-top' src='fisch.jpg' alt='Card image cap'><div id='zivibg' class='card-body'><p class='card-text' id='ziviname'>ZiviName2</p></div></div></div>";
var ziviEditTemplate = "<div class='col-md-2' id='zivi0'><div class='card mb-2 box-shadow'><input type='hidden' id='inputId' value='0'><input type='text' id='inputName' class='form-control' placeholder='Zivi name' required autofocus><label for='inputSpanish' class='sr-only'>Spanish name</label><input type='text' id='inputPassword' class='form-control' placeholder='El pedro' readonly><label for='inputImage'class='sr-only'>Image</label><input type='text' id='inputImage' class='form-control' placeholder='image/'><button class='btn btn-lg btn-primary btn-block zivibutton'>Edit</button></div></div>";
var ziviEditExitButton = "<div class='col-md-2' id='zivi0'><div class='card mb-2 box-shadow'><button class='btn btn-lg btn-warning btn-block' id='new'><button class='btn btn-lg btn-danger btn-block' id='exit'>Exit</button></div></div>";
var warTemplate = "WAR"
var zivis;
var spanish = false;

const ip = "http://localhost/zimon/database/";

function getSpanish() {
  return spanish;
}

function setSpanish(s) {
  spanish = s;
}

function readZivis() {
  $.ajax({
      url: ip + "getZivis.php",
    })
    .done(function(json) {
      zivis = $.parseJSON(json);
      shuffleZivis();
    });
}

function readZivisEdit() {
  $.ajax({
      url: ip + "getZivis.php",
    })
    .done(function(json) {
      zivis = $.parseJSON(json);
      editZivi();
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

function editZivi() {
  setEdit(true);
  setWar(true);
  clearZivis();
  for (i = 0; i < zivis.length; i++) {
    if (i == 0) {
      //Insert first one
      $("#zivis").prepend(ziviEditTemplate);
    } else {
      $("#zivi" + (i - 1)).clone().prop('id', 'zivi' + i).appendTo("#zivis");
    }
    $("#zivi" + i).find("#inputId").val(zivis[i].id);
    $("#zivi" + i).find("#inputName").val(zivis[i].name);
    $("#zivi" + i).find("#inputImage").val(zivis[i].bild);
  }
  //ExitButton
  $("#zivis").prepend(ziviEditExitButton);
  $("#exit").click(function() {
    setEdit(false);
    restartSystem();
    return;
  });
  $("#new").click(function() {
    $.ajax({
        url: ip + "newZivi.php",
      })
      .done(function(data) {
        console.log(data);
        readZivisEdit();
        //editZivi();
      });
  });
  $(".zivibutton").click(function() {
    var $div = $(this).parent().parent();
    var $id = $div.find("#inputId").val();
    var $name = $div.find('#inputName').val();
    var $image = $div.find('#inputImage').val();
    console.log($name + ", " + $image);
    $.get(ip + "updateZivi.php", {
      id: $id,
      name: $name,
      image: $image
    });
  });
}

function showMartialLaw() {
  clearZivis();
  $("#zivis").prepend(warTemplate);
}
