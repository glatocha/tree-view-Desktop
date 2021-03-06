const { dialog } = require('electron')
const { ipcMain } = require('electron')
const fs = require('fs')

//const { createLogger } = require('vuex')

ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg) // prints "ping"
    event.reply('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg) // prints "ping"
    event.returnValue = 'pong'
})

ipcMain.on('ipc-rm-open-file-message', (e) => {
    console.log("OpenFile Command send")
    const options = {
        title: "Select file to open",
        defaultPath: "",
        filters: [
            { name: "TreeView files", extensions: ['json'] }
        ],
        properties: ['openFile']
    }
    const fileName = dialog.showOpenDialogSync(options)
    if (fileName === undefined) {
        e.returnValue = undefined
        return
    } else {
        console.log(fileName[0])
        const fileContent = fs.readFileSync(fileName[0], 'utf8');
        e.returnValue = {
            fileName: fileName[0],
            fileContent
        }
    }
})

ipcMain.on('ipc-rm-save-file-message', (e, payload) => {
    console.log("SaveFile Command send")
    console.log(e)
    console.log('payload :>> ', payload);
    const options = {
        title: "Save...",
        defaultPath: "",
        filters: [
            { name: "TreeView files", extensions: ['json'] }
        ],
        properties: ['openFile']
    }
    const fileName = dialog.showSaveDialogSync(options) 
    if (fileName) {
        fs.writeFileSync(fileName, JSON.stringify(payload));
        console.log("Save file name = " + fileName);
        e.returnValue = { fileName: "testFile" }
    } else {
        console.log("Save file aborted");
        e.returnValue = { error: true, message: "Save file aborted" };
    }
})



