/* eslint-disable */
import axios from 'axios';

class API {
  constructor() {
    this.baseUrl = process.env.REACT_APP_BASE_URL;
    this.axios = axios.create();
    this.axios.defaults.withCredentials = true;
    // eslint-disable-next-line
    this.axios.defaults.headers.Authorization = {'Content-Type': 'application/json'};
    this.axios.interceptors.response.use((resp) => resp, (error) => Promise.reject(error));
  }

  get(endpoint, params) {
    const config = {
      params,
    };
    return this.axios.get(`${this.baseUrl}/api/${endpoint}`, config);
  }

  post(endpoint, data) {
    return this.axios.post(`${this.baseUrl}/api/${endpoint}`, data);
  }

  put(endpoint, data) {
    return this.axios.put(`${this.baseUrl}/api/${endpoint}`, data);
  }

  delete(endpoint) {
    return this.axios.delete(`${this.baseUrl}/api/${endpoint}`);
  }
}

export default API;