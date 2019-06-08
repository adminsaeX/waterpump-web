/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express')
const authApp = express.Router()

authApp.post('/client', function (req, res) {
    console.log({
        username: req.body.username,
        password: req.body.password
    });
    res.json({
        token: 'token',
        rule: 0,
        username: 'Admin',
        id: '1'
    })
})

module.exports = authApp
