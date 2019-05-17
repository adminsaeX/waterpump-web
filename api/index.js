/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const app = express()

// Connection URL
const url = 'mongodb://localhost:27017'
// Database Name
const dbName = 'local'

// services import
const Users = require('./services/Users')
const Electricity = require('./services/Electricity')

// allow cross domain use api
const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
}

// bodyParser form data
app.use(allowCrossDomain)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(compression())

// Use connect method to connect to the server
MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server")

    const db = client.db(dbName)

    app.get('/', (req, res) => {
        res.send('Hi, Water pump server!')
    })

    //==================== API SECTION ====================//
    // Users API
    app.use('/users', Users)

    // Electricity API
    app.use('/electricity', Electricity)

});

//==================== API SECTION ====================//

module.exports = app