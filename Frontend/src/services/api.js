import axios from "axios";

const API = axios.create({
  baseURL: "http://10.254.202.225:3000",   //your LAN IP
});

export default API;
