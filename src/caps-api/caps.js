'use strict';

// require our events and modules
// const events = require('./util/event-pool.js');
const faker = require('faker');
// const vendor = require('../modules/vendor.js');
// const driver = require('../modules/driver.js');
const io = require('socket.io-client');
const express = require('express');
const cors = require('cors');

const Queue = require('./util/queue');
const queue = new Queue('api');

const socket = io.connect('http://localhost:3000/caps');

let delivery = {
  store: `${faker.company.catchPhraseDescriptor()} ${faker.company.catchPhraseNoun()}`,
  orderID: faker.datatype.uuid(),
  customer: `${faker.name.firstName()} ${faker.name.lastName()}`,
  address: `${faker.address.streetAddress()}`
}

// pickup
app.post('/pickup', (req,res) => {
  // post request from postman with a req.body
  console.log('req body', req.body);
  if(JSON.stringify(req.body) === '{}') {
      req.body = delivery;
  }
  socket.emit('pickup', req.body);
  socket.emit('join', req.body.store);
  res.status(200).send(`Scheduled delivery for ${req.body}`);
});

// in-transit
// delivered

// // callback function
// function logAllEvents(event, payload) {
//     // console log event, time, payload
//     console.log({
//         event: event,
//         time: new Date(),
//         payload: payload
//       })
// };
