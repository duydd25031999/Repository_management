import Api from './Api'
import config from './config'

export default {
    /**
     * get list repos by page
     * @param {String} userName : name of current user
     * @param {Number} page : index of page
     * @returns {Promise}
     */
    getRepoPage(userName, page) {
        let url = `users/${userName}/repos?page=${page}&per_page=${config.itemPerPage}`
        return Api.sendGetApi(url)
    }
}