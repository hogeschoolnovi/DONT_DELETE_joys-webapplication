import * as axios from "axios";

const backendURL = "http://localhost:8081"

const createToken = (accessToken) => {
    return `Bearer ${accessToken}`
}

const protectedGet = (url, accessToken) => {
    return axios.get(`${backendURL}${url}`, {
        headers: {
            'Authorization': createToken(accessToken)
        }
    })
}
const protectedPost = (url, accessToken, data = {}) => {
    return axios.post(`${backendURL}${url}`, data, {
        headers: {
            'Authorization': createToken(accessToken)
        }
    })
}

const unProtectedPost = (url, data = {}) => {
    return axios.post(`${backendURL}${url}`, data);
}


const protectedDelete = (url, accessToken) => {
    return axios.delete(`${backendURL}${url}`, {
        headers: {
            'Authorization': createToken(accessToken)
        }
    })
}


export default {
    protectedGet,
    protectedPost,
    protectedDelete,
    unProtectedPost,
}