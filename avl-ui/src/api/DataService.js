import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://thesuperbrain.org/api',
  timeout: 1000
});

export default instance;