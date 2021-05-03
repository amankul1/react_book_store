import axios from "axios";


export const anotherAxios = (token) => {
    return axios.create({
        baseURL: 'http://pj-bookstore.herokuapp.com',
        headers: {
            Authorization: `Bearer ${token}`,
            ContentType: 'application/json'
        }
    })
}

export const getAxios = () => {
    return axios.create({
        baseURL: 'http://pj-bookstore.herokuapp.com',
        headers: {
            ContentType: 'application/json'
        }
    })
}


