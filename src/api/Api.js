import axios from "axios"
import config from "./config"
import store from "../store/index"

/**
 * @param {Object} customerHeader 
 * @returns {import("axios").AxiosInstance}
 */
function getCaller(customerHeader) {
    let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    }
    if(customerHeader) {
        headers = customerHeader
    }

    let caller = axios.create({
        baseURL: config.backendEndpoint,
        headers: headers,
        timeout: config.timeoutDefault
    });
    return caller
}

/**
 * caller call get api
 * @param {String} url 
 * @param {Object} customerHeader 
 * @returns {Promise}
 */
function sendGetApi(url, customerHeader) {
    let caller = getCaller(customerHeader);
    let api = caller.get(url, {
        onDownloadProgress: (progressEvent) => {
            /**
             * can't calculate progress percent because progressEvent.total = 0
             */
        }
    })
    return api
}

export default {
    getCaller,
    sendGetApi
}