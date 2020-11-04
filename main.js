// import connection from './mysql'
const { app, BrowserWindow } = require('electron')
const mysql = require('mysql')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'ELECTRON_TEST_APP'
  })
  connection.connect()


  connection.query('SELECT 1 + 1 AS result', function (error, results, fields) {
    if (error) throw error;
    console.log('1 + 1 = ', results[0].result);
  })
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
