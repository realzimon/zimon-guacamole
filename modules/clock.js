var end;

function timer(minutes, seconds) {
  end = addTime(new Date(), minutes, seconds);
  var t = setInterval(function() {
    var time = new Date((end.getTime()) - (new Date().getTime()));
    var m = leadingZero(time.getMinutes());
    var s = leadingZero(time.getSeconds());
    $("#timer").html(m + ":" + s);
    //Reset
    if (time.getMinutes() == 0 && time.getSeconds() == 0) {
      end = addTime(new Date(), minutes, seconds);
      Zivis.readZivis();
    }
    if (Vars.war) {
      clearInterval(t);
    }
  }, 500);
}

function reloadTimer(minutes, seconds) {
  //Set end to +min, seconds
  end = addTime(new Date(), minutes, seconds);
  Zivis.shuffleZivis();
}


function addTime(time, minutesToAdd, secondsToAdd) {
  time.setMinutes(time.getMinutes() + minutesToAdd);
  time.setSeconds(time.getSeconds() + secondsToAdd);
  return time;
}

function clock() {
  //Clock
  setInterval(function() {
      var current = new Date();
      if (Vars.wrongClock) {
        //Returns random clock time
        var cs = current.getSeconds();
        current.setSeconds(Math.floor(Math.random() * (60 - cs)));
        var cm = current.getMinutes();
        current.setMinutes(Math.floor(Math.random() * (60 - cm)));
      }
      var h = leadingZero(current.getHours());
      var m = leadingZero(current.getMinutes());
      var s = leadingZero(current.getSeconds());

    $("#clock").html(h + ":" + m + ":" + s);
  }, 500);
}

function leadingZero(i) {
  // add zero in front of numbers < 10
  if (i < 10) {
    i = "0" + i
  };
  return i;
}

module.exports.clock = clock;
module.exports.timer = timer;
module.exports.reloadTimer = reloadTimer;
