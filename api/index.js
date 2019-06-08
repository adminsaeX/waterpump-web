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
const app = express()

// services import
const Auth = require('./services/Auth')
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
    res.send('Hello!')
})

//==================== API SECTION ====================//
// Users API
app.use('/users', Users)

// auth api
app.use('/auth', Auth)

// Electricity API
app.use('/electricity', Electricity)
//==================== API SECTION ====================//

module.exports = app