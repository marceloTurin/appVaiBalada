import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:3333/',
  baseURL: 'https://cold-dodo-53.localtunnel.me/'
});

export default api;
