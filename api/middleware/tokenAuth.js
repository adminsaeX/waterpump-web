let jwt = require('jsonwebtoken')
var colors = require('colors/safe');
require('dotenv').config()

let checkToken = (req, res, next) => {
    let token = req.headers['authorization'] // Express headers are auto converted to lowercase

    if (token) {
        jwt.verify(token, process.env.SECECT_KEY, (err, decoded) => {
            if (err) {
                console.error(colors.bgRed('Token is not valid'));
                return res.send('401:การยืนยันตนไม่ถูกต้อง')
            } else {
                console.log(colors.bgGreen('Token is pass!'));
                req.decoded = decoded;
                next();
            }
        });
    } else {
        console.error(colors.bgRed('Auth token is not supplied'));
        return res.send('401:ไม่พบข้อมูลยืนยันตน')
    }
}

module.exports = {
    checkToken: checkToken
}