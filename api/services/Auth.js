/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express')
const authApp = express.Router()
require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const colors = require('colors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const jwt = require('jsonwebtoken')
const base64 = require('base64-encode-decode');
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(compression())

var db_options = {
    autoReconnect: true,
    socketTimeoutMS: 480000,
    keepAlive: 300000,
    keepAliveInitialDelay: 300000,
    connectTimeoutMS: 30000,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 1000,
    useNewUrlParser: true
}

MongoClient.connect(process.env.DBURL, db_options, function (err, client) {
    assert.equal(null, err)
    var db = client.db(process.env.DBNAME)
    var collection = db.collection("solar_user")

    authApp.post('/client', function (req, res) {
        var username = req.body.username
        var password = req.body.password
        const enPass = base64.base64Encode(password)

        collection.find({ "user_ID": username, "pass_word": enPass }).toArray(function (err, search) {
            if (err || this.status == 'DESTOYER') {
                sendResponse(res, 500, err.message)
                return
            }
            if (search.length === 1) {
                console.log(search)
                var data = search[0]
                generateClientToken({
                    permission: data.permission,
                    user_ID: data.user_ID,
                    _id: data._id
                }, res)
            } else {
                sendResponse(res, 404, 'No user data.')
            }
        })
    })
})

module.exports = authApp

const sendResponse = (res, status, data) => {
    console.log('MongoDB', colors.red(data))
    res.status(status).json({ data })
}
const generateClientToken = ((user, res) => {
    jwt.sign({ rule: user.permission, id: user._id }, process.env.SECECT_KEY, { expiresIn: '24h' }, (err, token) => {
        res.json({
            token,
            id: user._id,
            rule: user.permission,
            username: user.user_ID
        })
    })
})
const generateAdminToken = ((user, res) => {
    jwt.sign({ rule: user.permission, userId: user._id }, process.env.SECECT_KEY, { expiresIn: '24h' }, (err, token) => {
        res.json({
            token,
            id: user._id,
            rule: user.permission,
            username: user.user_ID
        })
    })
})