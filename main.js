const {app, BrowserWindow, Menu} = require('electron')
const path = require("path")
// let clock = require(path.resolve('modules/clock.js'))
const clock = require('electron').remote.require('modules/clock')

function createWindow () {
  console.log("create window");
  console.log(path.resolve('modules/clock.js'));
  console.log(clock);
    // Create the browser window.
  let win = new BrowserWindow({ fullscreen: true, titleBarStyle: 'hidden' })

    // and load the index.html of the app.
    win.loadFile('index.html')

    // Open the DevTools.
    win.webContents.openDevTools()

    //let test = new BrowserWindow({width: 800, height: 600, parent: win})
    // Emitted when the window is closed.
    win.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      win = null
    })
  }

  function loadModules(){
    console.log("Loading Modules");
    clock.init();
  }
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', () => {createWindow(); loadModules();})

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })
