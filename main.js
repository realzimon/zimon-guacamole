const {app, BrowserWindow} = require('electron');

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on('ready', () => {
    createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});

//Electron update service
require('update-electron-app')();


function createWindow() {
    // Create the browser window.
    let win = new BrowserWindow({
        fullscreen: true,
        titleBarStyle: 'hidden',
    });


    // and load the index.html of the app.
    win.loadFile('index.html');
    require('./menu/mainmenu');

    // Open the DevTools.
    //win.webContents.openDevTools()
    win.setIcon("./assets/zimon-hat.png");
    win.on('closed', () => {
        win = null
    });
}
