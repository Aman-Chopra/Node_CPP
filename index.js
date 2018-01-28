'use strict';

const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

require('electron-reload')(__dirname);

let mainWindow

app.on('ready', () => {
    mainWindow = new BrowserWindow({width:800, height:600})
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})
