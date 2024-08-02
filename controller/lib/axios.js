const axios = require('axios')
const MY_TOKEN = process.env.MY_TOKEN
const BASE_URL = process.env.BASE_URL ? process.env.BASE_URL + MY_TOKEN : `https://api.telegram.org/bot${MY_TOKEN}`

function getAxiosInstance() {
    return {
        get (method, params) {
            return axios.get(`/${method}`, {
                baseURL: BASE_URL,
                params,
            })
        },
        post (method, data) {
            return axios({
                method: "post",
                baseURL: BASE_URL,
                url: `/${method}`,
                data
            })
        }
    }
}

module.exports = {axiosInstance : getAxiosInstance()}