const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        webPreferences: {nodeIntegration: true},
        icon: __dirname +'./src/asset/logo.icns'
    })
    // 加载应用----react 打包

    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL(url.format({
            pathname: path.join('localhost:3000/index.html'),
            protocol: 'http:',
            slashes: true
        }));


    } else {

        mainWindow.loadURL(path.resolve(__dirname,'/build/index.html'));
    }

    // 打开开发者工具，默认不打开
    mainWindow.webContents.openDevTools()


    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    // macOS中除非用户按下 `Cmd + Q` 显式退出,否则应用与菜单栏始终处于活动状态.
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

