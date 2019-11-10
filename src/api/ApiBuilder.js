import axios from "axios"
import config from "./config"

/**
 * 
 * @param {Object} customerHeader 
 * @returns {import("axios").AxiosInstance}
 */
function ApiBuilder(customerHeader) {
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

export default ApiBuilder