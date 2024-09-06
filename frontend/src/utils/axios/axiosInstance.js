import axios from 'axios';

// import {Base_URL} from './constants'
const Base_URL = "http://localhost:8000";
const axiosInstance = axios.create({
    baseURL:Base_URL,
    timeout:10000,
    headers:{
        "Content-Type": "application/json"
    },
});
 
axiosInstance.interceptors.request.use(
    (config)=>{
    const accessToken = localStorage.getItem('token');

    if(accessToken){
        config.headers.Authorization=`Bearer ${accessToken}`;
    }
    return config
},
(error)=>{
    return Promise.reject(error);
});

export default axiosInstance;