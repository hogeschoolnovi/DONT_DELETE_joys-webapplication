import * as axios from "axios";

const createToken = (accesToken) => {
    return `Bearer ${accesToken}`
}

const protectedGet = (url, accesToken) => {
    return axios.get(url, {
        headers: {
            'Authorization': createToken(accesToken)
        }
    })
}
const protectedPost = (url, accesToken) => {
    return axios.post(url, {
        headers: {
            'Authorization': createToken(accesToken)
        }
    })
}
const protectedDelete = (url, accesToken) => {
    return axios.delete(url, {
        headers: {
            'Authorization': createToken(accesToken)
        }
    })
}

export default {
    protectedGet,
    protectedPost,
    protectedDelete
}