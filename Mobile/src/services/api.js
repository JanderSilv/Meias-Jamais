import axios from 'axios';

// const url = process.env.API_BASE_URL;
const url = 'https://meias-jamais.herokuapp.com/';
// console.log(url);
const api = axios.create({
    baseURL: url,
});

export default api;
