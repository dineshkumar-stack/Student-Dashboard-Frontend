// api.js
import axios from 'axios';

const instance  = axios.create({
  baseURL: 'https://student-dashboard-be.onrender.com/api',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`, // Retrieve the token from local storage
    'Content-Type': 'application/json',
  },
});

export default instance;
