import repositoryApi from '../api/repositoryApi'
import Repository from '../entities/Repository';

export default {
    namespaced: true,
    state: {
        /**@type {Number} : total number Repositories */
        totalRepos: 0,
        /**@type {Array<Repository>} :  List Repositories */
        repositories: []
    },
    getters: {
        /**@returns {Array<Repository>} */
        repositories: state => state.repositories,
        /**
         * @param {Object} state
         * @param {Array<Repository>} state.repositories
         * @returns {Number} 
         */
        noRepo: state => state.repositories.length
    },
    mutations: {
        /**
         * @param {Object} state
         * @param {Number} state.totalRepos
         * @param {Number} total
         */
        SET_TOTAL_REPOS: (state, total) => {
            state.totalRepos = total
        }
    },
    actions: {
        /**
         * @param {Object} context : this module
         * @param {Object} context.state : state of this module
         * @param {Array<Repository>} context.state.repositories
         * @returns {Promise}
         */
        getRepositoriesByPage: (context) => {

            let process = repositoryApi.getStarPage(repository.full_name, repository.nextPage).then(response => {
                if(response) {
                    response.forEach(item => {
                        let repository = new Repository(item)
                        context.state.repositories.push(repository)
                    })
                }
                repository.stargazersPage++;
            })
            return process
        }
    }
}