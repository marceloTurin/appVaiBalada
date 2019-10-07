import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3333/',
  baseURL: 'https://light-pug-45.localtunnel.me/'
});

export default api;
