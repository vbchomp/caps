'use strict';

function handlePickup(payload) {
  events.emit('join', payload.store);
  console.log(`DRIVER: Picked up this order: ${payload.orderID}`);

  setTimeout(() => {
    events.emit('in-transit', payload);
    console.log(`DRIVER: Now in transit with this order: ${payload.orderID}`);
  }, 5000)

  setTimeout(() =>{
    events.emit('delivered', payload);
    console.log(`DRIVER: Delivered this order: ${payload.orderID}`);
  }, 5000)
}

module.exports = handlePickup;