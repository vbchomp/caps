'use strict';

const events = require('../lib/events.js');

events.on('pickup', handleDelivery);

function handleDelivery(payload) {
  setTimeout(() => {
    console.log(`DRIVER: Picked up this order: ${payload.orderID}`);
    events.emit('in-transit', payload);
  }, 1000);

  setTimeout(() => {
    console.log(`DRIVER: Delivered this order: ${payload.orderID}`);
    events.emit('delivered', payload);
  }, 3000)
}

module.exports = handleDelivery;