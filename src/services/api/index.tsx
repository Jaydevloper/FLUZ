import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/",
  timeout: 30000,
});

api.interceptors.request.use(
  (configs) => {
    configs.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return configs;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
