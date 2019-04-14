import axios from "axios";

const api = axios.create({
  baseURL: "https://rbox-backend.herokuapp.com"
});

export default api;
