import ApiBuilder from './ApiBuilder'
import config from './config'
export default {
    /**
     * get list stargazers by page
     * @param {String} reposName : name of current repos
     * @param {Number} page : index of page
     * @returns {Promise}
     */
    getStarPage(reposName, page) {
        let url = `/repos/${reposName}/stargazers?page=${page}&per_page=${config.itemPerPage}`
        console.log("url", url)
        return ApiBuilder().get(url)
    }
}