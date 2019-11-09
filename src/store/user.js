import userApi from '../api/userApi'
import User from '../entities/User'
export default {
    namespaced: true,
    state: {
        /**@type {User} */
        user: {}
    },
    getters: {
        /**
         * @param {Object} state
         * @param {User} state.user
         * @returns {User} 
         */
        user: state => state.user,
        /**
         * @param {Object} state
         * @param {User} state.user
         * @returns {String} 
         */
        username: state => state.user.name
    },
    mutations: {},
    actions: {
        /**
         * @param {Object} context : this module
         * @param {Object} context.state : state of this module
         * @param {User} context.state.user
         * @param {String} username 
         * @returns {Promise}
         */
        getUser: (context, username) => {
            let process = userApi.getUser(username).then(response => {
                let user = new User(response)
                context.state.user = user
                context.commit("repository/SET_TOTAL_REPOS", user.totalRepos)
            })
            return process
        }
    }
}