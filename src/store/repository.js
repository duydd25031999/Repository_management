import repositoryApi from '../api/repositoryApi'
import Repository from '../entities/Repository';
import _ from 'lodash'

export default {
    namespaced: true,
    state: {
        /**@type {Number} : total number Repositories */
        totalRepos: 0,
        /**@type {Array<Repository>} :  List Repositories */
        repositories: [],
        /**@type {Number} : current page of repo */
        page: 0
    },
    getters: {
        /**@returns {Array<Repository>} */
        repositories: state => state.repositories,
        /**@returns {Number} */
        noRepo: state => state.repositories.length,
        /**@returns {Number} */
        totalRepo: state => state.totalRepos,
        /**
         * check can add more repository to list
         * @param {Object} state
         * @param {Array<Repository>} state.repositories
         * @param {Number} state.totalRepos
         * @returns {Boolean}
         */
        isLastPage: state => {
            return state.repositories.length >= state.totalRepos
        }
    },
    mutations: {
        /**
         * @param {Object} state
         * @param {Number} state.totalRepos
         * @param {Number} total : total number of repository
         */
        SET_TOTAL_REPOS: (state, total) => {
            state.totalRepos = total
        },
        CLEAR_PAGE: (state) => {
            state.page = 0
        }
    },
    actions: {
        /**
         * @param {Object} context : this module
         * @param {Object} context.state : state of  this module
         * @param {Array<Repository>} context.state.repositories : state of  this module
         * @returns {Promise}
         */
        getRepositoriesByPage: (context) => {
            if(context.getters["isLastPage"]) {
                return new Promise();
            }
            let username = context.rootGetters["user/login"]
            let nextPage = context.state.page + 1
            /**@type {Array<Repository>} : buffer array to hold repos from response*/
            let bufferArr = []

            let process = repositoryApi.getRepoPage(username, nextPage).then(response => {
                //get repo then add to buffer                
                if(response) {
                    response.forEach(item => {
                        let repository = new Repository(item)
                        bufferArr.push(repository)
                    })
                }
                //after successful, add buffter to repositories
                context.state.repositories = _.concat(context.state.repositories, bufferArr)
                context.state.page++;
            })
            return process
        }
    }
}