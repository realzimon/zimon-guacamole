<<<<<<< HEAD
var end;

=======
>>>>>>> 6efe22dcda4b2419433c051d2b69117abc308062
function timer(minutes, seconds) {
  end = addTime(new Date(), minutes, seconds);
  setInterval(function() {
    var time = new Date((end.getTime()) - (new Date().getTime()));
    var m = leadingZero(time.getMinutes());
    var s = leadingZero(time.getSeconds());
    $("#timer").html(m + ":" + s);
    //Reset
    if (time.getMinutes() == 0 && time.getSeconds() == 0) {
<<<<<<< HEAD
      end = addTime(new Date(), minutes, seconds);
      readZivis();
=======
      end = addTime(new Date(), 5);
>>>>>>> 6efe22dcda4b2419433c051d2b69117abc308062
    }
  }, 500);
}

<<<<<<< HEAD
function reloadTimer(minutes, seconds){
  //Set end to +min, seconds
  end = addTime(new Date(), minutes, seconds);
  readZivis();
}


=======
>>>>>>> 6efe22dcda4b2419433c051d2b69117abc308062
function addTime(time, minutesToAdd, secondsToAdd) {
  time.setMinutes(time.getMinutes() + minutesToAdd);
  time.setSeconds(time.getSeconds() + secondsToAdd);
  return time;
}

function clock() {
  //Clock
  setInterval(function() {
    var current = new Date();
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
