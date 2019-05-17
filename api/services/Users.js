/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express')
const usersApp = express.Router()

usersApp.post('/data', function (req, res) {
    res.json({
        msg: 'Users data api.'
    })
})

module.exports = usersApp
