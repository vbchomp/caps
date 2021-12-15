'use strict';

const events = require('../utils/event-pool.js'); // allows to listen for all events
const handlePickup = require('../handlers/pickupHandler.js');

events.on('pickup', handlePickup);

// Pickup Queue
