function readZivis() {
  $.ajax({
      url: ip + "getZivis.php",
    })
    .done(function(json) {
      zivis = $.parseJSON(json);
      if (getEdit()) {
        editZivi();
      } else {
        shuffleZivis();
      }
    });
}

function shuffleZivis() {
  var lastFirst = zivis[0].name;
  while (zivis[0].name == lastFirst && zivis.length > 1) {
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
    if (getSpanish()) {
      $("#zivi" + i).find("#ziviname").html(zivis[i].spanish);
    } else {
      $("#zivi" + i).find("#ziviname").html(zivis[i].name);
    }
    $("#zivi" + i).find("#ziviimage").attr("src", zivis[i].bild);
    $("#zivi" + i).find("#zivibg").css({
      backgroundColor: zivis[i].farbe
    });
  }
}

function showMartialLaw() {
  clearZivis();
  $("#zivis").prepend(warTemplate);
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
  $("#zivis").prepend(ziviEditButton);
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
        readZivisEdit();
      });
  });
  $(".zivibutton").click(function() {
    var $div = $(this).parent().parent();
    var $id = $div.find("#inputId").val();
    var $name = $div.find('#inputName').val();
    var $image = $div.find('#inputImage').val();
    $.get(ip + "updateZivi.php", {
      id: $id,
      name: $name,
      image: $image
    });
  });
}

module.exports.readZivis = readZivis;
