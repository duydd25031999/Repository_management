import stargazerApi from '../api/stargarzerApi'
import Repository from '../entities/Repository';
import Stargazer from '../entities/Stargazer'


export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        /**
         * @param {Object} context : this module
         * @param {Repository} repository 
         * @returns {Promise}
         */
        getStargazersByPage: async (context, repository) => {
            if(repository.isLastPage) {
                return new Promise()
            }
            /**@type {Array<Stargazer>} */
            let bufferArr = []

            context.commit("loading/LOAD_API", undefined, { root: true })

            let api = stargazerApi.getStarPage(repository.full_name, repository.nextPage)
            let process =  api.then(response => {
                if(response.data) {
                    response.data.forEach(item => {
                        let stargarzer = new Stargazer(item)
                        bufferArr.push(stargarzer)
                    })
                }
                repository.addStargazerPage(bufferArr)
            })

            //when finish api (success or not) => close loading
            process.finally(() => {
                context.commit("loading/FINISH_API", undefined, { root: true })
            })
            return process
        }
    }
}