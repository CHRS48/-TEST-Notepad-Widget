const { app, BrowserWindow, ipcMain } = require("electron");

let win;

function createWindow() {

    win = new BrowserWindow({
        width: 340,
        height: 500,
        frame: true,
        resizable: true,
        alwaysOnTop: false,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);

ipcMain.on("toggle-pin", ()=>{

    const state = !win.isAlwaysOnTop();
    win.setAlwaysOnTop(state);

});