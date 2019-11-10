import Stargazer from "./Stargazer";
import _ from "lodash"

export default class Repository {
    /**
     * @param {Object} repository 
     * @param {String} repository.id
     * @param {String} repository.name
     * @param {String} repository.full_name : format = "username/reponame"
     * @param {Number} repository.stargazers_count : number of stargazers of this repository
     */
    constructor(repository) {
        /**@type {String} */ 
        this.id = repository.id

        /**@type {String} */
        this.name = repository.name;

        /**@type {String} */
        this.full_name = repository.full_name

        /**@type {Number} : total number of stargazers of this repository */
        this.stargazers_count = repository.stargazers_count

        /**@type {Number} : current page of repository*/
        this.stargazersPage = 0

        /**@type {Array<Stargazer>} list of stargazers */
        this.stargazers = []
    }

    /**
     * get size of this.stargazers
     * @returns {Number}
     */
    get noStargazers() {
        return this.stargazers.length
    }

    /**
     * get total number of stargazers
     * @returns {Number}
     */
    get totalStargazers() {
        return this.stargazers_count
    }
    
    /**
     * get next page of stargazers
     * @returns {Number}
     */
    get nextPage() {
        return this.stargazersPage + 1
    }

    /**@returns {Boolean} */
    get isLastPage() {
        return this.stargazers.length >= this.stargazers_count
    }

    /**
     * add item in stargazer api to list stargazers of repos
     * @param {Object} stargazerResponse 
     * @param {String} stargazerResponse.login username of stargazer
     * @param {String} stargazerResponse.id
     */
    addStargazer(stargazerResponse) {
        let stargazer = new Stargazer(stargazerResponse)
        this.stargazers.push(stargazer)
    }

    /**
     * stargazers page back to 0
     */
    clearPage() {
        this.stargazersPage = 0;
    }

    /**
     * add stargazers array of new page to this.stargazers
     * @param {Array<Stargazer>} arr : add stargazers array of new page
     */
    addStargazerPage(arr) {
        this.stargazers = _.concat(this.stargazers, arr)
        this.stargazersPage++;
    }
}