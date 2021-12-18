'use strict';

// not needed for this lab.
// const events = require('../utils/event-pool.js'); // allows to listen for all events
// const handlePickup = require('../handlers/pickupHandler.js');

// connecting to socket io as a client
const io = require('socket.io-client');
// connecting to the HUB
const socket = io.connect('http://localhost:3000/caps');

socket.on('pickup', (payload) => {

    setTimeout(() => {
        console.log('pickup', payload.orderID);
        socket.emit('in-transit', payload);
    }, 2000);

    setTimeout(() => {
        console.log('delivered', payload.orderID);
        socket.emit('delivered', payload);
    }, 2000);
});