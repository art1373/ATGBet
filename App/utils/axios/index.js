import axios from "axios";
import { Config } from "App/Config";

let baseURL = Config.API_URL;

const instance = axios.create({
  baseURL,
  headers: {},
});

instance.interceptors.request.use(
  async (config) => {
    config.headers.common["Content-Type"] = "application/json";
    config.headers.Accept = "application/ld+json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
