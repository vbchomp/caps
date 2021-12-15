'use strict';

// require our events and modules
const events = require('./util/event-pool.js');
const faker = require('faker');
const vendor = require('../modules/vendor.js');
const driver = require('../modules/driver.js');


// Event listeners => callback
// events on: pickup, in-transit, delivered
events.on('pickup', (payload) => logAllEvents('pickup', payload));
events.on('inTransit', (payload) => logAllEvents('inTransit', payload));
events.on('delivery', (payload) => logAllEvents('delivery', payload));


// callback function
function logAllEvents(event, payload) {
    // console log event, time, payload
    console.log({
        event: event,
        time: new Date(),
        payload: payload
      })
};

module.exports = logAllEvents;
