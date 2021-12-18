'use strict';

const express = require('express');
const cors = require('cors');
const faker = require('faker');
const io = require('socket.io-client');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

const socket = io.connect('http://localhost:3000/caps');

app.listen(PORT, () => {
  console.log(`Server is listening on this port: ${PORT}`)
})
