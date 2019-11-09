export default class Stargazer {
    /**
     * @constructor
     * @param {Object} stargazer
     * @param {String} stargazer.login username of stargazer
     * @param {String} stargazer.id
     */
    constructor(stargazer) {
        /**@type {String} : username of stargazer */
        this.login = stargazer.login
        /**@type {String} */
        this.id = stargazer.id
    }
    /**@returns {string} */
    get name() {
        return this.login
    }
}