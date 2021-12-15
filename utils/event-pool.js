'use strict';

const Events = require('events');
const events = new Events();  // event pool

// Export ONE instance of events that all modules can share
// this is called a ... "singleton"
// Think of it as a global variable that all the modules can see and use

// respond to events


// events.on


// function


module.exports = events;