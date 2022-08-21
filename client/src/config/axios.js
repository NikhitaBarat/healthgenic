import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://healthgenica.herokuapp.com'
})

export default instance;