'use strict';

const express = require('express');
const cors = require('cors');
const faker = require('faker');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
  console.log(`Server is listening on this port: ${PORT}`)
})
