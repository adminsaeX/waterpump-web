/* eslint-disable no-console */
// import module
require('dotenv').config()
const winston = require('winston')
const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT

// server import
const api = require('./api/index')

// Access-Control-Allow
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
})

// api service
app.use('/api', api)

// admin service
// app.use(express.static(path.join(__dirname, '../admin/dist') + '/', {
//     index: false,
//     maxAge: '1d',
//     redirect: false
// })).use('./admin', (req, res, next) => {
//     res.set('Content-Type', 'text/html');
//     res.sendFile(path.join(__dirname, '../admin/dist') + '/index.html', {}, function (err) {
//         if (err) {
//             next(err);
//         } else {
//             console.log('Sent:', path.join(__dirname, '../admin/dist') + '/index.html');
//         }
//     });
// });

// client service
app.use(express.static(path.join(__dirname, '../client/dist') + '/', {
    index: false,
    maxAge: '1d',
    redirect: false
})).use('*', (req, res, next) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname, '../client/dist') + '/index.html', {}, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', path.join(__dirname, '../client/dist') + '/index.html');
        }
    });
})

// server create listening
const server = app.listen(PORT)
server.on('listening', () => {
    winston.info(`server running on ${PORT}`);
})
