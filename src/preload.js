const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("open_liteLoader_when_logging_back_in", {
    openQQ: () => ipcRenderer.invoke(
        "LiteLoader.open_liteLoader_when_logging_back_in.openQQ"
    )
});
