let zivis, counter = [], roundZivis = [], ziviTemplate, ziviEditTemplate, ziviEditButton, warTemplate;

// Ohne jQuery => viel cooler
fetch("./components/ziviCards.html")
  .then(res => ziviTemplate = res.text())
  .then(data => ziviTemplate = data)

fetch("./components/ziviEdit.html")
  .then(res => ziviEditTemplate = res.text())
  .then(data => ziviEditTemplate = data)

fetch("./components/ziviEditButton.html")
  .then(res => ziviEditButton = res.text())
  .then(data => ziviEditButton = data)

fetch("./components/warTemplate.html")
  .then(res => warTemplate = res.text())
  .then(data => warTemplate = data)

function readZivis() {
  mysqlService.readZivisDB(result => {
    zivis = result;
    zivis.forEach(zivi => {
      counter[zivi.name] = 0;
    })

    Vars.edit
      ? editZivi()
      : shuffleZivis()
  });
}

function shuffleZivis() {
  let lastFirst = zivis[0].name;
  counter[zivis[0].name]++;
  roundZivis[roundZivis.length] = zivis[0].id;
  if (roundZivis.length === zivis.length) roundZivis = [];
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
      if (zivis[0].name === lastFirst) console.log("shuffle incorrect; shuffle again");
    }
  }
  showZivis();
}

function clearZivis() {
  document.querySelector("#zivis").innerHTML = "";
}

function showZivis() {
  clearZivis();

  zivis.forEach((zivi, index) => {
    let parent = document.querySelector("#zivis");
    if(index === 0){
      parent.insertAdjacentHTML("afterbegin", ziviTemplate);
    } else {
      let tmp = document.querySelector("#zivi" + (index - 1)).cloneNode(true);
      tmp.setAttribute("id", "zivi" + index);
      parent.appendChild(tmp);
    }

    let ziviElement = document.querySelector("#zivi" + index);

    //print content
    Vars.spanish
      ? ziviElement.querySelectorAll("#ziviname").innerHTML = zivi.spanish
      : ziviElement.querySelectorAll("#ziviname").innerHTML = zivi.name

    //ziviElement.querySelector("#zivicount").innerHTML = counter[zivi.name];
    ziviElement.querySelector("#ziviimage").setAttribute("src", zivi.bild);
    ziviElement.querySelector("#zivibg").style.backgroundColor = zivi.farbe;
  })

  setInterval(showRemainingPeriodOfService(), 86400000);
}

function showMartialLaw() {
  clearZivis();
  let parent = document.querySelector("#zivis");
  parent.insertAdjacentHTML("afterbegin", warTemplate);
}

Date.prototype.addMonths = function (m) {
  let d = new Date(this);
  let years = Math.floor(m / 12);
  let months = m - (years * 12);
  if (years) d.setFullYear(d.getFullYear() + years);
  if (months) d.setMonth(d.getMonth() + months);
  d.setDate(d.getDate()-1);
  return d;
}

// Day difference between two dates excluding weekends
function diff(date1, date2) {
  let weeks, dateDiff, adjust = 0;

  if (date2 < date1) return -1;

  let weekday1 = date1.getDay() == 0 ? 7 : date1.getDay();
  let weekday2 = date2.getDay() == 0 ? 7 : date2.getDay();

  if ((weekday1 > 5) && (weekday2 > 5)) adjust = 1;

  weekday1 = (weekday1 > 5) ? 5 : weekday1;
  weekday2 = (weekday2 > 5) ? 5 : weekday2;
  weeks = Math.floor((date2.getTime() - date1.getTime()) / 604800000)

  weekday1 <= weekday2
    ? dateDiff = (weeks * 5) + (weekday2 - weekday1)
    : dateDiff = ((weeks + 1) * 5) - (weekday1 - weekday2)

  dateDiff -= adjust;
  return (dateDiff + 1);
}

function showRemainingPeriodOfService(){
  let today = new Date();
  zivis.forEach((zivi, index) => {
    let days = diff(today, zivi.antritt.addMonths(9));
    let percent = Math.round((days / diff( zivi.antritt, zivi.antritt.addMonths(9) )) * 1000) / 10;
    document.querySelector("#zivi" + index).querySelectorAll("#remainingDays").innerHTML = days + " / " + percent + "%";
  })
}

function editZivi() {
  Vars.edit = true;
  clearZivis();
  let parent = document.querySelector("#zivis");

  zivis.forEach((zivi, index) => {
    if(index === 0){
      parent.insertAdjacentHTML("afterbegin", ziviEditTemplate);
    } else {
      let tmp = document.querySelector("#zivi" + (index - 1)).cloneNode(true);
      tmp.setAttribute("id", "zivi" + index);
      parent.appendChild(tmp);
    }

    parent.querySelectorAll("#inputId").value = zivi.id;
    parent.querySelectorAll("#inputName").value = zivi.name;
    parent.querySelectorAll("#inputSpanish").value = zivi.spanish;
    parent.querySelectorAll("#inputImage").value = zivi.bild;
  })

  //ExitButton
  parent.insertAdjacentHTML("afterbegin", ziviEditButton);
  document.querySelector("#exit").addEventListener("click", () => {
    Vars.edit = false;
    KeyBinds.restartSystem();
  })

  //NewButton
  document.querySelector("#new").addEventListener("click", () => {
    mysqlService.newZiviDB();
    readZivis();
  })

  //InputChange
  document.querySelector(".card .ziviedit").addEventListener("input", () => {
    let div = document.querySelector(this).parentNode.parentNode;
    console.log(div);
    div.querySelectorAll(".zivibutton").classList.remove("btn-primary").classList.add("btn-warning");
  })

  //SubmitButton
  document.querySelector(".zivibutton").addEventListener("click", () => {
    let div = document.querySelector(this).parentNode.parentNode;
    let id = div.querySelectorAll("#inputId").value;
    let name = div.querySelectorAll("#inputName").value;
    let image = div.querySelectorAll("#inputImage").value;
    mysqlService.updateZiviDB(name, image, id);
    div.querySelectorAll(".zivibutton").classList.remove("btn-warning").classList.add("btn-primary");
  })

  document.querySelector(".zividead").addEventListener("click", () => {
    let div = document.querySelector(this).parentNode.parentNode;
    let id = div.querySelectorAll("#inputId").value;
    mysqlService.killZiviDB(id);
    readZivis();
  })
}

module.exports.readZivis = readZivis;
module.exports.showZivis = showZivis;
module.exports.showMartialLaw = showMartialLaw;
module.exports.editZivi = editZivi;
module.exports.shuffleZivis = shuffleZivis;
module.exports.showRemainingPeriodOfService = showRemainingPeriodOfService;
