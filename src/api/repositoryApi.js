import testRepos from './testRepos'

export default {
    /**
     * get list repos by page
     * @param {String} userName : name of current user
     * @param {Number} page : index of page
     * @returns {Promise}
     */
    getRepoPage(userName, page) {
        if(page == 1) {
            return testRepos.page1()
        }
        return testRepos.page2()
    }
}