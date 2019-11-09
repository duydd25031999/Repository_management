import testStar from './testStar'
export default {
    /**
     * get list stargazers by page
     * @param {String} reposName : name of current repos
     * @param {Number} page : index of page
     * @returns {Promise}
     */
    getStarPage(reposName, page) {
        if(page == 1) {
            return testStar.page1()
        }
        return testStar.page2()
    }
}