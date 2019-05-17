/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express')
const electricityApp = express.Router()

electricityApp.post('/data', function (req, res) {
    res.json({
        msg: 'Electricity data api.'
    })
})

module.exports = electricityApp
