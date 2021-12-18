'use strict';

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/caps');

socket.on('delivered', (payload) => {
    console.log(`Thanks for delivering ${payload}`);
});


// delivery variable <- store, orderID, customer, address
setInterval(() => {
    let delivery = {
        store: `${faker.company.catchPhraseDescriptor()} ${faker.company.catchPhraseNoun()}`,
        orderID: faker.datatype.uuid(),
        customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
        address: `${faker.address.streetAddress()}`
    }
    events.emit('pickup', delivery);
}, 5000);

function handleDelivery(payload) {
    console.log(`VENDOR: Thank you for delivering this order: ${payload.orderID}`);
  };


events.on('delivered', handleDelivery);
