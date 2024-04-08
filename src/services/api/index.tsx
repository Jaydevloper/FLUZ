import axios from "axios";

const api = axios.create({ baseURL: "", timeout: 30000 });

api.interceptors.request.use(
  (configs) => {
    //   configs.headers.Authorization = `Bearer ${storage.get("token")}`;
    return configs;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
