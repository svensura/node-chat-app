const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

const {generateMessage, generateLocationMessage} = require('./utils/message')
const {isRealString} = require('./utils/validation')

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));



  // socket.emit('newMessage', {
  //   from: 'server',
  //   text: 'From server text',
  //   createdAt: 123
  // });

  // socket.on('createEmail', (newEmail) => {
  //   console.log('create Email', newEmail);
  // });

  socket.on('createMessage', (newMessage, callback) => {
    console.log('createMessage', newMessage);
    io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
    // acknowledgement
    callback();
  });

  socket.on('createLocationMessage', (coords) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
  });
  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });

  socket.on('join', (params, callback) => {
    console.log('User joined');
    if (!isRealString(params.name) || !isRealString(params.room)) {
      callback('Name and room name are required.')
    } else {
      callback();
    }
  });

});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});