import stargazerApi from '../api/stargarzerApi'
import Repository from '../entities/Repository';


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
            let process = stargazerApi.getStarPage(repository.full_name, repository.nextPage).then(response => {
                if(response) {
                    response.forEach(item => {
                        repository.addStargazer(item)
                    })
                }
                repository.stargazersPage++;
            })
            return process
        }
    }
}