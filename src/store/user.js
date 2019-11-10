import userApi from '../api/userApi'
import User from '../entities/User'
export default {
    namespaced: true,
    state: {
        /**@type {User} */
        user: {},
        /**@type {Boolean} */
        hasUser: false
    },
    getters: {
        /**@returns {User} */
        user: state => state.user,
        /**
         * @param {Object} state @param {User} state.user
         * @returns {String} 
         */
        username: state => state.user.name,
         /**
         * @param {Object} state @param {User} state.user
         * @returns {String} 
         */
        login: state => state.user.login,
        /** @returns {Boolean} */
        hasUser: state => state.hasUser
    },
    mutations: {},
    actions: {
        /**
         * @param {String} username 
         * @returns {Promise}
         */
        getUser: (context, username) => {
            let process = userApi.getUser(username).then(response => {
                let user = new User(response)
                context.commit("repository/SET_TOTAL_REPOS", user.totalRepos, { root: true })
                context.state.hasUser = true
                context.state.user = user
            })
            return process
        }
    }
}