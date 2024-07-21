import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://estateapp-backend-cbde.onrender.com/api",
    withCredentials: true,
});

export default apiRequest; 