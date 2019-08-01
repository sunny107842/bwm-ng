const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const config = require('./config');
const FakeDb = require('./fake-db');
const Rental = require('./models/rental');
const path = require('path');
const serverPath = require('./config')

const app = express();
const rentalRoutes = require('./routes/rentals');


mongoose.connect(serverPath)
.then(()=>{
    console.log("Connected to database");
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
   
}).catch((err)=>{
console.log(err);
console.log("connection failed");
});

app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT , function() {
  console.log('App is running!');
});

