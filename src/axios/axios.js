import axios from "axios";

// const baseAPI = "http://localhost:8888/api";
// const recommenderAPI = "http://localhost:8000/api";
const baseAPI = "https://9151-2405-201-8012-3dac-d59d-1990-ccc-313.ngrok-free.app/api";
const recommenderAPI = "https://bookwormfastapi.onrender.com/api";

export const authorizedAxios = (jwt) => axios.create({
  baseURL: baseAPI,
  headers: {
    Authorization: `Bearer ${jwt}`,
    "Access-Control-Allow-Origin": '*',
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
  }
});

export const unauthorizedAxios = axios.create({
  baseURL: baseAPI,
  headers: {
    "Access-Control-Allow-Origin": '*',
    "ngrok-skip-browser-warning": "69420",
  }
});

export const recommenderAxios = axios.create({
  baseURL: recommenderAPI
});
