import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        post: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, TOKEN, X-Requested-With'
        }
    }
});

axiosInstance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token != null) {
        config.headers.TOKEN = token;
    }
    
    return config;
}, function (err) {
    return Promise.reject(err);
});

