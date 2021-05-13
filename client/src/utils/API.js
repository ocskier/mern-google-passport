import axios from 'axios';

const API = {
  getUser: () => axios.get('/auth/user'),
  logout: () => axios.post('/auth/logout'),
};

export default API;
