const {Menu} = require('electron');

const template = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Edit',
                accelerator: 'CmdOrCtrl+E',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("Zivis.editZivi(); Quote.editQuote();");
                }
            }, {
                label: 'Shuffle Zivis',
                accelerator: 'CmdOrCtrl+S',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("Clock.reloadTimer(10, 0);");
                }
            },

            {
                role: 'quit'
            }
        ]
    },
    {
        label: 'Coffee',
        submenu: [
            {
                label: 'Add Espresso',
                accelerator: '1',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("Coffee.drinkCoffee(2);");
                }
            },
            {
                label: 'Add Dippio',
                accelerator: '3',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("Coffee.drinkCoffee(3);");
                }
            },
            {
                label: 'Add Caffè Crema',
                accelerator: '5',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("Coffee.drinkCoffee(1);");
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Add Bean',
                accelerator: '0',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("Coffee.addCoffee();");
                }
            },
            {
                label: 'Clear Beans',
                accelerator: '7',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("Coffee.clearCoffee();");
                }
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Mexico-Mode',
                accelerator: 'CmdOrCtrl+M',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("Vars.spanish = !Vars.spanish; Zivis.showZivis();");
                }
            },
            {
                label: 'Toggle Lightrope',
                accelerator: 'CmdOrCtrl+I',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("$(\".lightrope\").toggleClass(\"invisible\");");
                }
            },
            {
                label: 'Listen-Mode',
                accelerator: 'CmdOrCtrl+L',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("$(\".overlay\").toggleClass(\"overlay-open\");");
                }

            },
            {
                label: 'Reload menu',
                accelerator: 'CmdOrCtrl+F',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("Menu.getDailyMenu();");
                }
            },
            /*{
                label: 'Apply filter',
                accelerator: 'CmdOrCtrl+B',
                click(item, focusedWindow) {
                    focusedWindow.webContents.executeJavaScript("if ((Vars.selectedFilter + 1) === Config.filter.length) {" +
                        "Vars.selectedFilter = 0;" +
                        "} else {" +
                        "Vars.selectedFilter++;" +
                        "}" +
                        "$(\"body\").css('filter', Config.filter[Vars.selectedFilter]);");
                }
            },*/
            {
                type: 'separator'
            },
            {
                label: 'Reload',
                accelerator: 'CmdOrCtrl+R',
                click(item, focusedWindow) {
                    if (focusedWindow) focusedWindow.reload()
                }
            },
            {
                label: 'Toggle Developer Tools',
                accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
                click(item, focusedWindow) {
                    if (focusedWindow) focusedWindow.webContents.toggleDevTools()
                }
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Go to wiki page',
                click() {
                    require('electron').shell.openExternal('https://github.com/realzimon/zimon-guacamole/wiki')
                }
            }
        ]
    }
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);