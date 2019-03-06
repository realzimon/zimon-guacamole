let end;

function timer(minutes, seconds) {
    end = addTime(new Date(), minutes, seconds);
    let t = setInterval(function () {
        let time = new Date((end.getTime()) - (new Date().getTime()));
        let m = leadingZero(time.getMinutes());
        let s = leadingZero(time.getSeconds());
        $("#timer").html(m + ":" + s);
        //Reset
        if (time.getMinutes() === 0 && time.getSeconds() === 0) {
            end = addTime(new Date(), minutes, seconds);
            Zivis.shuffleZivis();
        }
        if (Vars.war || Vars.edit) {
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
  setInterval(function () {
    let current = new Date();
    let h = leadingZero(current.getHours());
    let m = leadingZero(current.getMinutes());
    let s = leadingZero(current.getSeconds());
    document.querySelector("#clock").innerHTML = h + ":" + m + ":" + s;
  }, 500);
}

function leadingZero(i) {
    // add zero in front of numbers < 10
    if (i < 10) {
        i = "0" + i
    }
    return i;
}

module.exports.clock = clock;
module.exports.timer = timer;
module.exports.reloadTimer = reloadTimer;