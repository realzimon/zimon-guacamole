// const BrowserWindow = require('electron')
const path = require('path')
// const remote = require("electron").remote;
//const BrowserWindow = electron.remote.BrowserWindow
const { BrowserWindow } = require('electron')

  const win = new BrowserWindow()
// mainWindow =
module.exports = init();
function init(){
  console.log("init");
  clock();
}



  function clock() {
    console.log("hi");
    console.log("need remote " + remote);
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    remote.getCurrentWindow().webContents.executeJavaScript(`document.getElementById('timer').innerHTML =
    h + ":" + m + ":" + s;`)
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;

}
