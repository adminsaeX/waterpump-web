/* eslint-disable indent */
const mutations = {
    // eslint-disable-next-line indent
    login(state, { token, rule, id, username }) {
        state.token = token
        state.auth.id = id
        state.auth.username = username
        state.auth.rule = rule
    },
    logout (state) {
        state.token = null
        state.auth.username = ''
        state.auth.id = ''
        state.auth.rule = 0
    },
    changeLng (state, lng) {
        state.language = lng
    }
}
export default mutations
