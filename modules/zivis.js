let zivis, counter = [];
let roundZivis = [];

var ziviTemplate, ziviEditTemplate, ziviEditButton;
$.get("resources/components/ziviCards.html", function(response) {
  ziviTemplate = response;
});
$.get("resources/components/ziviEdit.html", function(response) {
  ziviEditTemplate = response;
});
$.get("resources/components/ziviEditButton.html", function(response) {
  ziviEditButton = response;
});

var warTemplate;
$.get("resources/components/warTemplate.html", function(response) {
  warTemplate = response;
});

function readZivis() {
  mysqlService.readZivisDB(function(result) {
    zivis = result;
    for (i = 0; i < zivis.length; i++) {
      counter[zivis[i].name] = 0;
    }
    if (Vars.edit) {
      editZivi();
    } else {
      shuffleZivis();
    }
  });
}

function shuffleZivis() {
  let lastFirst = zivis[0].name;
  counter[zivis[0].name]++;
  roundZivis[roundZivis.length] = zivis[0].id;
  // console.log(counter);
  if (roundZivis.length == zivis.length) {
    roundZivis = [];
    // console.log("This round is over");
  }
  if (zivis.length > 1) {
    while (roundZivis.includes(zivis[0].id)) {
      //Shuffles zivi array
      let currentIndex = (zivis.length - 1),
        temporaryValue, randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        // And swap it with the current element.
        temporaryValue = zivis[currentIndex];
        zivis[currentIndex] = zivis[randomIndex];
        zivis[randomIndex] = temporaryValue;
        currentIndex--;
      }
      if (zivis[0].name == lastFirst) {
        console.log("shuffle incorrect; shuffle again");
      }
    }
  }
  showZivis();
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
    if (Vars.spanish) {
      $("#zivi" + i).find("#ziviname").html(zivis[i].spanish);
    } else {
      $("#zivi" + i).find("#ziviname").html(zivis[i].name);
    }
    $("#zivi" + i).find("#zivicount").html(counter[zivis[i].name]);
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
  Vars.edit = true;
  Vars.war = true;
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
    $("#zivi" + i).find("#inputSpanish").val(zivis[i].spanish);
    $("#zivi" + i).find("#inputImage").val(zivis[i].bild);
  }
  //ExitButton
  $("#zivis").prepend(ziviEditButton);
  $("#exit").click(function() {
    Vars.edit = false;
    KeyBinds.restartSystem();
    return;
  });
  //NewButton
  $("#new").click(function() {
    mysqlService.newZiviDB();
    readZivis();
  });

  //InputChange
  $(".card .ziviedit").bind('input', function() {
    var $div = $(this).parent().parent();
    $div.find(".zivibutton").removeClass("btn-primary").addClass("btn-warning");
  });
  //SubmitButton
  $(".zivibutton").click(function() {
    var $div = $(this).parent().parent();
    var id = $div.find("#inputId").val();
    var name = $div.find('#inputName').val();
    var image = $div.find('#inputImage').val();
    mysqlService.updateZiviDB(name, image, id);
    $div.find(".zivibutton").removeClass("btn-warning").addClass("btn-primary");
  });
  $(".zividead").click(function() {
    var $div = $(this).parent().parent();
    var id = $div.find("#inputId").val();
    mysqlService.killZiviDB(id);
    readZivis();
  });
}

module.exports.readZivis = readZivis;
module.exports.showZivis = showZivis;
module.exports.showMartialLaw = showMartialLaw;
module.exports.editZivi = editZivi;
module.exports.shuffleZivis = shuffleZivis;
