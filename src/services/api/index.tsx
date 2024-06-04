import axios from "axios";

const api = axios.create({
  baseURL: "https://fluz-back.onrender.com/api/v1",
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
