let end;

function timer(minutes, seconds) {
    end = addTime(new Date(), minutes, seconds);
    let timer = document.querySelector("#timer");
    if (Config.timer.text.show) {
        timer.parentElement.prepend(Config.timer.text.value + " ");
    }
    let t = setInterval(function () {
        let time = new Date((end.getTime()) - (new Date().getTime()));
        let m = leadingZero(time.getMinutes());
        let s = leadingZero(time.getSeconds());
        //timer = document.querySelector("#timer");
        $("#timer").html(m + ":" + s);
        //timer.innerHTML = m + ":" + s;
        //Reset
        if (time.getMinutes() === 0 && time.getSeconds() === 0) {
            end = addTime(new Date(), minutes, seconds);
            console.log(new Date());
            console.log(end);
            Zivis.shuffleZivis();
        }
        if (Vars.war || Vars.edit) {
            clearInterval(t);
        }
    }, 1000);
}

function reloadTimer(minutes, seconds) {
    //Set end to +min, seconds
    end = addTime(new Date(), minutes, seconds);
    console.log("reloadtimer aufgerufen " + new Date())
    Zivis.shuffleZivis();
}


function addTime(time, minutesToAdd, secondsToAdd) {
    time.setMinutes(time.getMinutes() + minutesToAdd);
    time.setSeconds(time.getSeconds() + secondsToAdd);
    console.log("addTime aufgerufen ");
    return time;
}

function clock() {
    let clock = document.querySelector("#clock");
    clock.setAttribute("style", "color: " + Config.clock.color + "; font-family: " + Config.clock.font);
    setInterval(function () {
        let current = new Date();
        let h = leadingZero(current.getHours());
        let m = leadingZero(current.getMinutes());
        let s = leadingZero(current.getSeconds());
        $("#clock").html(h + ":" + m + ":" + s);
        //clock.innerHTML = h + ":" + m + ":" + s;
    }, 1000);
}

function leadingZero(i) {
    // add zero in front of numbers < 10
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

module.exports.clock = clock;
module.exports.timer = timer;
module.exports.reloadTimer = reloadTimer;
