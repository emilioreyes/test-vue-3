
import axios from "axios"; 
import {apiUrlMain } from "./api"
const instance = axios.create({
    baseURL: apiUrlMain,
    timeout: 10000000,
  });
// Add a request interceptor
axios.interceptors.request.use( (config)=> {
    // Do something before request is sent
    config.headers["Content-Type"]='application/json;charset=UTF-8';
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use( (response)=> {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default instance;