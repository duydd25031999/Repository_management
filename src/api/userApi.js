import ApiBuilder from "./ApiBuilder"
export default {
    /**
     * get user by username
     * @param {String} username 
     * @returns {Promise}
     */
    getUser(username) {
        return ApiBuilder().get(`users/${username}`)
    }
}