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
    login({ state, commit }, auth) {
        return makeRequest().post(`/api/auth/client`, querystring.stringify(auth))
            .then(({ status, data }) => {
                if (status === 200) {
                    const { token, rule, id, username } = data
                    commit('login', { token, rule, id, username })
                    return true
                }
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data)
                }
                return error.response.data.data
            })
    },
    register({ state, commit },form) {
        return makeRequest().post(`/api/users/register`, querystring.stringify(form))
            .then(({ status, data }) => {
                if (status === 200) {
                    return true
                } else {
                    return data.data
                }
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data)
                }
                return error.response.data.data
            })
    },
    RequestUserList({ state, commit }, form) {
        return makeRequest().post(`/api/users/`, querystring.stringify(form))
            .then(({ status, data }) => {
                return data.data
            }).catch(function (error) {
                if (error.response) {
                    console.log(error.response.data)
                }
                return error.response.data.data
            })
    },
    GetReportData({ state, commit }, date) {
        return makeRequest(state.token).post('/api/electricity/', date)
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