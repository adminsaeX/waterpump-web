module.exports = {
    convertDateTime (datetime) {
        // return `${datetime.getFullYear()}-${parseInt(datetime.getMonth()) + 1}-${datetime.getDate()}T${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}.${datetime.getMilliseconds()}Z`
        return `${datetime.getFullYear()}-${parseInt(datetime.getMonth()) + 1}-${datetime.getDate()}T${datetime.getHours()}:${datetime.getMinutes()}:${datetime.getSeconds()}.${datetime.getMilliseconds()}Z`
    }
}