/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express')
const authApp = express.Router()

authApp.post('/client', function (req, res) {
    var username = req.body.username
    var password = req.body.password
    var user

    console.log({
        username: req.body.username,
        password: req.body.password
    })

    if (username == 'admin' && password == '1234') {
        user = {
            token: 'token',
            rule: 1,
            username: 'Admin VIP',
            id: '1'
        }
    } else if (username == 'user' && password == '1234') {
        user = {
            token: 'token',
            rule: 2,
            username: 'User test',
            id: '1'
        }
    } else {
        user = {
            token: 'token',
            rule: 0,
            username: 'Guest Test',
            id: '1'
        }
    }

    res.json(user)
})

module.exports = authApp
