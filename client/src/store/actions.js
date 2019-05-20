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
    GetReportData({ state, commit }, { search, date}) {
        return makeRequest().get(`/api/electricity/${date.date_start + '/'}${date.date_end + '/'}${search.reportType + '/'}${search.SolarPump + '/'}`)
        .then(({ status, data }) => {
            if (status === 200) {
                return data
            }
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