import axios from "axios";

const instance = axios.create({
    baseURL: "https://mytiktok-mern-backend.herokuapp.com/",
});

export default instance;