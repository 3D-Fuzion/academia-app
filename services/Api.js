import axios from 'axios';

const api = axios.create({
  baseURL: 'https://academia-api.onrender.com/',
});

export default api;
