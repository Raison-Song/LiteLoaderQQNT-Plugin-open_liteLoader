const { app, ipcMain } = require("electron");
const { exec } = require('child_process');

function onLoad(plugin, liteloader) {
    ipcMain.handle(
        "LiteLoader.open_liteLoader_when_logging_back_in.openQQ",
        (event) => {
            try {
                exec('"C:\\Program Files\\Tencent\\QQNT\\LiteLoaderQQNT-Launcher_x64.exe"', (error, stdout, stderr) => {});
                app.exit(0);
            } catch (error) {
            }
        }
    );
}

module.exports = {
    onLoad
};
