import Repository from './Repository'
import _ from "lodash"

export default class RepositoryList {

    constructor() {
        /**@type {Array<Repository>} */
        this.repositories = []
        /**@type {Number} */
        this.total = 0
        /**@type {Number} */
        this.page = 0;
        /**@type {Boolean} */
        this.loading = false
    }

    /**@returns {Array<Repository>} */
    get all() {
        return this.repositories
    }

    /**@returns {Boolean} */
    get isLastPage() {
        return this.all.length >= this.total
    }

    clearPage() {
        this.repositories = []
        this.page = 0
    }

    get nextPage() {
        return this.page + 1
    }

    /**
     * @param {Array<Repository>} newArr 
     */
    addNewPage(newArr) {
        this.repositories = _.concat(this.repositories, newArr)
        this.page++
    }
}