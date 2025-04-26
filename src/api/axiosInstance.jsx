import axios from "axios";

const axiosInstance = axios.create({
  baseURL: ' https://workintech-fe-ecommerce.onrender.com', // Base URL for all requests
  headers: {
    'Content-Type': 'application/json',
    // Authorization token if exists
  },
  timeout: 10000, // 10seconds timeout
});

export default axiosInstance;
