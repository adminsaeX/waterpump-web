/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable no-console */
// allow cross domain use api
/* eslint-disable quotes */
const crypto = require('crypto')
require('dotenv').config()

module.exports = {
  cryptographic: function (txt) {
    var hash = crypto.createHmac('sha256', txt).update(process.env.SECECT_KEY).digest('hex')
    return hash
  }
}
