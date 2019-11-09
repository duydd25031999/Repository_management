import testUser from "./testUser"
export default {
    /**
     * get user by username
     * @param {String} username 
     * @returns {Promise}
     */
    getUser(username) {
        return testUser.user()
    }
}