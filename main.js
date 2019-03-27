const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#fff',
        icon: `file://${__dirname}/dist/weather/assets/icons/logo.png`
    })

    win.loadURL(`file://${__dirname}/dist/weather/index.html`);

    win.on('closed', () => win = null)
}


// create window on electron init
app.on('ready', createWindow);

// quit when all windows are closed
app.on('window-all-closed', () => {
    // on macOs
    if (process.platform !== 'darwin') app.quit();
})

app.on('activate', () => {
    //macOs
    if(win === null) createWindow();
})