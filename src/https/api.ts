import axios from "axios";

const API = axios.create({
    baseURL: 'https://63839ee11ada9475c80450a2.mockapi.io/'
})

export default API;