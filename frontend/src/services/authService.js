//define api routes for call login and register api
import axios from 'axios';

export const login = (Credentials) => {
    return axios.post('http://localhost:5000/api/auth/login', Credentials);
};

export const register = (userData) => {
    return axios.post('http://localhost:5000/api/auth/register', userData)
};
