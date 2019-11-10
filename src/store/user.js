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
        getUser: async (context, username) => {
            context.commit("loading/LOAD_API", undefined, { root: true })

            /**@type {Promise} */
            let api = userApi.getUser(username)
            let process =  api.then(response => {
                let user = new User(response.data)
                context.commit("repository/SET_TOTAL_REPOS", user.totalRepos, { root: true })
                context.state.hasUser = true
                context.state.user = user
            })

            //when finish api (success or not) => close loading
            process.finally(() => {
                context.commit("loading/FINISH_API", undefined, { root: true })
            })
            return process
        }
    }
}