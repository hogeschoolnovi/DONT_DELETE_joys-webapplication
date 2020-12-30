import * as axios from "axios";

const createToken = (accessToken) => {
    return `Bearer ${accessToken}`
}

const protectedGet = (url, accessToken) => {
    return axios.get(url, {
        headers: {
            'Authorization': createToken(accessToken)
        }
    })
}
const protectedPost = (url, accessToken) => {
    return axios.post(url, {
        headers: {
            'Authorization': createToken(accessToken)
        }
    })
}
const protectedDelete = (url, accessToken) => {
    return axios.delete(url, {
        headers: {
            'Authorization': createToken(accessToken)
        }
    })
}

export default {
    protectedGet,
    protectedPost,
    protectedDelete
}