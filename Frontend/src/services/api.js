import axios from "axios";
import Constants from 'expo-constants';
import * as SecureStore from "expo-secure-store";

const ApiURL = () => {
  const debuggerHost = Constants.expoConfig?.hostUri;
  if (debuggerHost) {
    const host = debuggerHost.split(':')[0];
    return `http://${host}:3000`;
  }
  return "http://localhost:3000";
};

const API = axios.create({
  baseURL: "http://10.74.106.142:3000",   //your LAN IP
  headers: { 'Content-Type': "application/json" }
});

// Interceptor to attach token to all requests
API.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
