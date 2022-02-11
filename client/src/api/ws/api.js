import socket from "./index.js";


export const emitMassage = (message, name) => socket.emit('message', message, name)

