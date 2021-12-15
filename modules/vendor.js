'use strict';

const events = require('../utils/event-pool.js'); // allows to listen for all events
const faker = require('faker');
const handleDelivery = require('../handlers/deliveryHandler.js');




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


events.on('delivered', handleDelivery);
