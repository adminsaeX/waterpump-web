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
var options = {
    keepAlive: 1,
    connectTimeoutMS: 3000,
    useNewUrlParser: true
}

MongoClient.connect(url, options, function (err, client) {
    assert.equal(null, err);
    // console.log("Connection Electricity successful!");
    const db = client.db(dbName)
    
    electricityApp.get('/:date_start/:date_end/:type/:pump', function (req, res) {
        var date_start = req.params.date_start || ''
        var date_end = req.params.date_end || ''
        var type = req.params.type || ''
        var pump = req.params.pump || ''


        console.log('electricityApp', {
            date_start: new Date(date_start),
            date_end: new Date(date_end),
            type,
            pump,
        });
        
        db.collection("report_data").find({
            ts: {
                $gte: new Date(date_start),
                $lt: new Date(date_end),
            },
            bucket: { $regex: pump, $options: "$i" }
        }).toArray(function (err, result) {
            if (err || this.status == 'DESTOYER'){
                res.status(500).json({
                    msg: err.message
                })
                return
            }
            res.json(result)
            client.close()
        });
    })
});

module.exports = electricityApp
