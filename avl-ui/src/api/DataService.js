import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3100/api',
  timeout: 1000
});

export default instance;