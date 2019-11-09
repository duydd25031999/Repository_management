export default class User {
    /**
     * @param {Object} user 
     * @param {String} user.id
     * @param {String} user.login
     * @param {String} user.name
     * @param {Number} user.public_repos : number of public repos
     */
    constructor(user) {
        /**@type {String} */
        this.id = user.id

        /**@type {String} */
        this.login = user.login
        
        /**@type {String} */
        this.name = user.name

        /**@type {Number} : number of public repos */
        this.public_repos = user.public_repos
    }

    /**
     * @returns {Number}
     */
    get totalRepos() {
        return this.public_repos
    }
}