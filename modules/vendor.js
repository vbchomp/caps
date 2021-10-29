'use strict';

const events = require('../util/event-pool.js');
const faker = require('faker');

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



// 

// Ready for Pickup

// See status of deliveries
// In-Transit
// Delivered