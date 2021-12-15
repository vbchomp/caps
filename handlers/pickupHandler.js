'use strict';

function handlePickup(payload) {
  events.emit('join', payload.store);
  console.log('driver picked up ', payload.orderID);

  setTimeout(() => {
    events.emit('in-transit', payload);
  }, 5000)

  setTimeout(() =>{
    console.log('driver delivered', payload.orderID);
    events.emit('delivered', payload);
  }, 5000)
}

module.exports = handlePickup;