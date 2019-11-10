import Api from "./Api"
export default {
    /**
     * get user by username
     * @param {String} username 
     * @returns {Promise}
     */
    getUser(username) {
        let url = `users/${username}`
        return Api.sendGetApi(url)
    }
}