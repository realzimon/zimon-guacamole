let end;

function timer(minutes, seconds) {
	end = addTime(new Date(), minutes, seconds);
	let timer = document.getElementById("timer");
	if (Config.timer.text.show) {
		timer.parentElement.innerHTML = Config.timer.text.value + " <span id='timer'> <!-- TIMER --></span>";
	}
	let t = setInterval(function () {
		time = new Date((end.getTime()) - (new Date().getTime()));
		m = leadingZero(time.getMinutes());
		s = leadingZero(time.getSeconds());
		//Reset
		if (time.getMinutes() === 0 && time.getSeconds() === 0) {
			end = addTime(new Date(), minutes, seconds);
      Zivis.shuffleZivis();
		} else if (time.getMinutes() >= 10) {
      end = addTime(new Date(), minutes, seconds);
      Zivis.shuffleZivis();
    }
		timer = document.getElementById("timer");
		timer.innerHTML = m + ":" + s;
		if (Vars.war || Vars.edit) {
			clearInterval(t);
		}
	}, 1000);
}

// function timer(minutes, seconds){
// 	let delay = miliseconds(minutes, seconds);
// 	console.log(delay);

// 	let expected = Date.now() + delay;
// 	//setTimeout(step, delay);
// 	step();
// 	function step(){
// 		console.log("step");
// 		let dt = Date.now() - expected;
// 		let da = new Date(expected);
// 		if(dt > delay) {
// 			console.log("dt > interval", dt, delay);
// 		}
// 		expected += delay;
// 		console.log(da.getMinutes(), da.getSeconds());
// 		setTimeout(step, Math.max(0, delay - dt));
// 	}
// }
// 
// Umrechnung in Millisekunden
// const miliseconds = (m,s) => (m * 60 + s) * 1000;

function reloadTimer(minutes, seconds) {
	//Set end to +min, seconds
	end = addTime(new Date(), minutes, seconds);
  Zivis.shuffleZivis();
  detectTimer();
}

function detectTimer() {
  let timer = document.getElementById("timer").parentElement.innerHTML;
  console.log(timer);
}

function addTime(time, minutesToAdd, secondsToAdd) {
	time.setMinutes(time.getMinutes() + minutesToAdd);
	time.setSeconds(time.getSeconds() + secondsToAdd);
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

// add zero in front of numbers < 10
function leadingZero(i) {
	return i < 10 ? i = `0${i}` : i;

	// if (i < 10) {
	// 	i = "0" + i;
	// }
	// return i;
}

module.exports.clock = clock;
module.exports.timer = timer;
module.exports.reloadTimer = reloadTimer;