import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8008",
});

// Define an array of routes that require authentication
const authenticatedRoutes = ['', '/route2', '/route3'];

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Auth');

    // Check if the current route is in the array of authenticated routes
    if (token && authenticatedRoutes.some(route => config.url.includes(route))) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
