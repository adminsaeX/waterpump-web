/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
const express = require('express')
const electricityApp = express.Router()
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const colors = require('colors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compression = require('compression')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('combined'))
app.use(compression())

// Connection URL
const url = 'mongodb://localhost:27017'
// const url = 'mongodb://34.73.53.90:27017'

// Database Name
// const dbName = 'thinger_data'
const dbName = 'solar_pump'

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

MongoClient.connect(url, db_options, function (err, client) {
    assert.equal(null, err)
    const db = client.db(dbName).collection("report_data")

    // api get report data
    electricityApp.post('/', function (req, res) {
        var date_start = req.body.date_start || ''
        var date_end = req.body.date_end || ''

        // log data request
        console.log('electricityApp', colors.cyan({
            date_start: new Date(date_start),
            date_end: new Date(date_end)
        }))
        
        // mongodb query function
        db.find({
            "ts": {
                $gte: new Date(req.body.date_start), 
                $lte: new Date(req.body.date_end)
            }
        }).toArray(function (err, result) {
            // if mongodb have an error send status 500
            if (err || this.status == 'DESTOYER') {
                res.status(500).json({
                    data: err.message
                })
                console.log('MongoDB', colors.red(err.message))
                return
            }

            // check result before respones
            console.log('result', colors.red(result.length))
            if (result.length > 0) {
                res.json({
                    status: 200,
                    data: result
                })
            } else {
                res.json({
                    status: 404,
                    data: 'No data'
                })
            }
        })
    })
})

module.exports = electricityApp
