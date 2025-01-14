import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
})

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.get('ACCESS_TOKEN')
    config.headers.Authorization = `Bearer ${token}`
    return config 
})

export default axiosClient