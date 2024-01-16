import axios from "axios";


const accessToken = localStorage.getItem("accessToken");

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    "Content-Type": "application/json",
    ...(accessToken && { "Authorization": `Bearer ${accessToken}` })
  },
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      console.log("Authentication error:", error.response.data);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
