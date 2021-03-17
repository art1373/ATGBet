import axios from "axios";
import { Config } from "App/Config";

let baseURL = Config.API_URL;

const instance = axios.create({
  baseURL,
  headers: {},
});

export default instance;
