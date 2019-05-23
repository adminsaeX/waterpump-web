/* eslint-disable */
import axios from 'axios'
const querystring = require('querystring')
const makeRequest = (token) => {
    const options = {
        baseURL: getApiUrl(),
        headers: {}
    }
    if (token) {
        options.headers = Object.assign({}, options.headers, { 'Authorization': token })
    }
    return axios.create(options)
}

const getApiUrl = () => {
    if (process.env.NODE_ENV !== 'production') {
        return 'http://localhost:3000'
    } else {
        return document.location.origin
    }
}

const actions = {
    logout({ commit }) {
        commit('logout')
    },
    GetReportData({ state, commit }, date) {
        return makeRequest().post('/api/electricity/', date)
        .then(({ status, data }) => {
            console.log(data)
            // if (data.status === 200) {
            //     return data
            // } else {
            //     return false
            // }
        }).catch(function (error) {
            console.log(error.data);
            return
        })
    },
    changeLng({ commit }, lng) {
        commit('changeLng', lng)
    }
}

export default actions