const { app, BrowserWindow, Menu } = require('electron');
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true }
  });

  win.loadFile('index.html');

  // Remove a barra de menu
  Menu.setApplicationMenu(null);
}

app.whenReady().then(createWindow);

