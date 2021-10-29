'use strict';

// require our events and modules
const events = require('./util/event-pool.js');
const faker = require('faker');

// const vendor = require('./modules/vendor.js');
// do not need to const since we are not using variable vendor or driver
require('./modules/vendor.js');
// const driver = require('./modules/driver.js');
require('./modules/driver.js');


// Event listeners => callback
// events on: pickup, in-transit, delivered
events.on('pickup', (payload) => logEvent('pickup', payload));
events.on('inTransit', (payload) => logEvent('inTransit', payload));
events.on('delivered', (payload) => logEvent('delivered', payload));


// callback function
function logEvent(event, payload) {
    // console log event, time, payload
};

// See that vendor has package ready for pickup
// See that driver has picked up and is in-transit
// See that package is delivered