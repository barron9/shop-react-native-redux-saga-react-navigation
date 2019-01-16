import axios from 'axios'
import { API_URL } from './../Config/api'

const apiV1 = axios.create();

export default apiV1;

apiV1.interceptors.response.use(function (response) {
    return new Promise(function (resolve, reject) {
        resolve(response.data)
    });
}, function (error) { });

export const postRequest = (url = API_URL, body, header) => new Promise(function (resolve, reject) {
    apiV1.post(url, {
        body: body,
        header: header,
    }).then(response => resolve(resolve))
})

export const getRequest = (url = API_URL, body = {}, header = "") => new Promise(function (resolve, reject) {
    apiV1.get(url, {
        body: body,
        header: header,
    }).then(response => resolve(response))
});