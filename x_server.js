'use strict'

// EVENT HUB

const event = require('./utils/event-pool.js');

// require the models that you create
require('./modules/vendor.js');
require('./modules/driver.js');

events.on('', (payload) => {
  events.emit('', { word: payload })
});
