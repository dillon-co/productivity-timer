const  { app, BrowserWindow, remote } = require('electron')

let win;

function createWindow () {
  win = new BrowserWindow({
    width: 1100,
    height: 900,
    backgroundColor: '#212121',
    icon: `file://${__dirname}/dist/angular-electron/logo.png`
  })

  win.loadURL(`file://${__dirname}/dist/angular-electron/index.html`)

  win.webContents.openDevTools()

  win.on('closed', function(){
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (win === null) {
    createWindow()
  }
})
