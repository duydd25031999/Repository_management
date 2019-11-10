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
        getStargazersByPage: (context, repository) => {
            if(repository.isLastPage) {
                return new Promise()
            }
            /**@type {Array<Stargazer>} */
            let bufferArr = []

            let process = stargazerApi.getStarPage(repository.full_name, repository.nextPage).then(response => {
                if(response) {
                    response.forEach(item => {
                        let stargarzer = new Stargazer(item)
                        bufferArr.push(stargarzer)
                    })
                }
                console.log("getStargazersByPage", bufferArr)
                repository.addStargazerPage(bufferArr)
            })
            return process
        }
    }
}