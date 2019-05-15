/* eslint-disable indent */
const mutations = {
    // eslint-disable-next-line indent
    login (state, { token, userType, userId }) {
        state.token = token
        state.auth.user_id = userId
        state.auth.user_type = userType
    },
    logout (state) {
        state.token = null
        state.auth.user_id = null
        state.auth.user_type = null
        state.auth.quantity = 0
    },
    changeLng (state, lng) {
        state.language = lng
    }
}
export default mutations
