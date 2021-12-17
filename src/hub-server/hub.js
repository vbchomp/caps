'use strict';

// require (socket)(port)
const io = require('socket.io')(3000);
// on connection -> console log that connection
io.on('connection', (socket) => {
  console.log('CORE', socket);
});

// lets create the namespace 'caps'
const caps = io.of('/caps');
// on connection to caps
// console log the connection
caps.on('connection', (socket) => {
  console.log('Caps connected to', socket.id);

  // join the room
  socket.on('join', room => {
    console.log(`Created as room ${room}`);
    socket.join(room);
  });

  // Pickup event
  socket.on('pickup', (payload) => {
    logAllEvents('Pickup', payload);
    caps.emit('Pickup', payload);
  });
  // In-transit event
  socket.on('in-transit', (payload) => {
    logAllEvents('in-transit', payload);
    caps.to(payload.store).emit('in-transit', payload);
  });

  // Delivered event
  socket.on('delivered', (payload) => {
    logAllEvents('delivered', payload);
    caps.to(payload.store).emit('delivered', payload);
  });
});

function logAllEvents(event, payload) {
  // console log event, time, payload
  console.log({
    event: event,
    time: new Date(),
    payload: payload
  })
};

module.exports = logAllEvents;