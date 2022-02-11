const express = require('express'); 
const app = express();
const router = require('../routers/router');
const { testSocket } = require('../socket/chatSocket');

app.use(express.json())

app.use('/api', router)

const port = process.env.PORT || 3000;

const server = app.listen(port,console.log(`Server run on ${port}`));
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:3001",
      methods: ["GET", "POST"],
      credentials:true
    }
  })

  io.on('connection', (socket) => {
    socket.on('message', (message, name) => {
      io.emit('message', message, name);
    });
  });


