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
// const database = import('./database/firebase_connection')
const app = express()

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

// hi, default page
app.get('/', (req, res) => {
    res.send('555555')
    // var device = database.ref('Device/')
    // try {
    //     device.on('value', function(snapshot) {
    //         if (snapshot) {
    //             res.send(snapshot.val())
    //         }
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
})

//==================== API SECTION ====================//
// Users API
app.use('/users', Users)

// Electricity API
app.use('/electricity', Electricity)

module.exports = app