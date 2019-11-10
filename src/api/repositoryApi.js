import ApiBuilder from './ApiBuilder'

export default {
    /**
     * get list repos by page
     * @param {String} userName : name of current user
     * @param {Number} page : index of page
     * @returns {Promise}
     */
    getRepoPage(userName, page) {
        return ApiBuilder().get(`users/${userName}/repos?page=${page}&per_page=30`)
    }
}