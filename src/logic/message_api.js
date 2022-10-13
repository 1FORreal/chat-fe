import axios from "axios"

const URL = 'http://localhost:8080/messages'

export const getMessages = (page_number, page_size) => {
    if(!page_number instanceof Number)
        throw "GET MESSAGE REQUEST PROBLEM"

    if(!page_size instanceof Number)
        throw "GET MESSAGE REQUEST PROBLEM"

    return axios({
        url: URL + '?page_number=' + page_number + '&page_size=' + page_size,
        method: 'get',
    })
}

export const postMessage = (message) => {
    if(message === null)
        throw 'POST MESSAGE REQUEST PROBLEM'

    return axios({
        url: URL,
        method: 'post',
        data: message
    })
}

export const isUsersMessage = (user, message) => {
    return (user.id === message.user.id ? true : false)
}

