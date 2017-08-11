/* Customers
- create db
- create a customer table
- save my db info to .env
- write a test
- write code to fulfill test
*/

// require('dotenv').config();

// var db = require('db')
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// })
//open chrome://inspect/#devices
//node --inspect-brk index.js

const express = require('express');
const webapp = express();  //for get/post requests
const Customer = require('./customer');
webapp.get('/', (req, resp) => {
    Customer
    .get(1)
    .then((myCustomer) => {
        resp.end(JSON.stringify(myCustomer));
    }).catch((err) => {
        resp.end('sorry!')
    });
});

webapp.listen(5000, () => {
    console.log('hellooooo');
})