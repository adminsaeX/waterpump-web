/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
require('dotenv').config()
const express = require('express')
const userApp = express.Router()
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const colors = require('colors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
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

    // api get all user data
    userApp.post('/', function (req, res) {
        // mongodb query function
        collection.find({}).toArray(function (err, result) {
            if (err || this.status == 'DESTOYER') {
                sendResponse(res, 500, err.message)
                return
            }

            // check result before respones
            console.log('result', colors.red(result.length))
            if (result.length > 0) {
                sendResponse(res, 200, result)
            } else {
                sendResponse(res, 404, 'No data')
            }
        })
    })

    // api user register
    userApp.post('/register', function (req, res) {
        var username = req.body.username
        var password = req.body.password
        var rule = req.body.rule
        var enPass = base64.base64Encode(password)
        if (username && password) {
            collection.find({ "user_ID": username}).toArray(function (err, search) {
                if (err || this.status == 'DESTOYER') {
                    sendResponse(res, 500, err.message)
                    return
                }
                if (search.length === 0) {
                    var data = {
                        "user_ID": username,
                        "pass_word": enPass,
                        "status": "A",
                        "permission": rule
                    }
                    collection.insertOne(data, function (err, result) {
                        if (err || this.status == 'DESTOYER') {
                            sendResponse(res, 500, err.message)
                            return
                        }

                        // check result before respones
                        console.log('result', colors.red(result))
                        if (result.result.ok == 1) {
                            sendResponse(res, 200, result)
                        } else {
                            sendResponse(res, 500, 'Try again later.')
                        }
                    })
                } else {
                    sendResponse(res, 401, 'this username already used.')
                }
            })
        } else {
            sendResponse(res, 404, 'No data')
        }

        // mongodb query function
        
    })

    userApp.post('/delete', function (req, res) {
        var data = {
            "user_ID": "admin"
        }
        // mongodb query function
        collection.deleteOne(data, function (err, result) {
            if (err || this.status == 'DESTOYER') {
                sendResponse(res, 500, err.message)
                return
            }

            // check result before respones
            if (result) {
                sendResponse(res, 200, result)
            } else {
                sendResponse(res, 404, 'No data')
            }
        })
    })
})

module.exports = userApp
const sendResponse = (res, status, data) => {
    console.log('MongoDB', colors.red(data))
    res.status(status).json({ data })
}