import repositoryApi from '../api/repositoryApi'
import Repository from '../entities/Repository';
import RepositoryList from '../entities/RepositoryList'
import _ from 'lodash'

export default {
    namespaced: true,
    state: {
        // /**@type {Number} : total number Repositories */
        // totalRepos: 0,
        // /**@type {Array<Repository>} :  List Repositories */
        // repositories: [],
        // /**@type {Number} : current page of repo */
        // page: 0,
        // /**@type {Boolean} : flag loading repo */
        // loading: false
        /**@type {RepositoryList} : flag loading repo */
        list: {}
    },
    getters: {
        /**@returns {Array<Repository>} */
        repositories: state => {
            return state.list.all
            //return state.repositories
        },
        /**@returns {Number} */
        noRepo: state => {
            return state.list.all.length
            //return state.repositories.length
        },
        /**@returns {Number} */
        totalRepo: state => {
            return state.list.total
            //return state.totalRepos
        },
        /**
         * check can add more repository to list
         * @param {Object} state
         * @param {Array<Repository>} state.repositories
         * @param {Number} state.totalRepos
         * @returns {Boolean}
         */
        isLastPage: state => {
            return state.list.isLastPage
            //return state.repositories.length >= state.totalRepos
        },
        /**@returns {Boolean} */
        isLoading: state => {
            return state.list.loading
            //return state.loading
        }
    },
    mutations: {
        /**
         * @param {Object} state
         * @param {Number} state.totalRepos
         * @param {Number} total : total number of repository
         */
        SET_TOTAL_REPOS: (state, total) => {
            state.list.total = total
            //state.totalRepos = total
        },
        CLEAR_PAGE: (state) => {
            // state.page = 0
            // state.repositories = []
            state.list.clearPage()
        },
        INIT_LIST: (state) => {
            state.list = new RepositoryList()
        }
    },
    actions: {
        /**
         * @param {Object} context : this module
         * @param {Object} context.state : state of  this module
         * @param {Array<Repository>} context.state.repositories : state of  this module
         * @returns {Promise}
         */
        getRepositoriesByPage: async (context) => {
             /**@type {RepositoryList} */
            let list = state.list
            console.log("getRepositoriesByPage", list)
            //if(context.getters["isLastPage"]) {
            if(list.isLastPage) {
                return new Promise();
            }
           
            let username = context.rootGetters["user/login"]
            //let nextPage = context.state.page + 1
            let nextPage = list.nextPage
            
            /**@type {Array<Repository>} : buffer array to hold repos from response*/
            let bufferArr = []

            context.commit("loading/LOAD_API", undefined, { root: true })
            //context.state.loading = true
            list.loading = true

            

            let api = repositoryApi.getRepoPage(username, nextPage)
            let process =  api.then(response => {
                //get repo then add to buffer                
                if(response.data) {
                    response.data.forEach(item => {
                        let repository = new Repository(item)
                        bufferArr.push(repository)
                    })
                }
                //after successful, add buffter to repositories
                //context.state.page = nextPage
                //context.state.repositories = _.concat(context.state.repositories, bufferArr)
                //context.state.page++;
                list.addNewPage(bufferArr)
            })

            //when finish api (success or not) => close loading
            process.finally(() => {
                context.commit("loading/FINISH_API", undefined, { root: true })
                //context.state.loading = false
                list.loading = false
            })
            return process
        }
    }
}