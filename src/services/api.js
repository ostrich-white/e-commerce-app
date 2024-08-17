import axios from "axios";
import { toast } from "react-toastify";

const toastErrors = (error) => {
    if (error.request) {
        toast.error('Network error. Please check your internet connection.');
    }
    else if (error.response) {
        const { status, data } = error.response;
  
        switch (status) {
          case 400:
            toast.error(data.message || 'Bad Request');
            break;
          case 401:
            toast.warning('Session expired. Please log in again.');
            // store.dispatch(logoutUser()); // Dispatch logout action
            break;
          case 403:
            toast.error('You do not have permission to perform this action.');
            break;
          case 404:
            toast.error('The requested resource was not found.');
            break;
          case 500:
            toast.error('An unexpected error occurred. Please try again later.');
            break;
          default:
            toast.error(data.message || 'An error occurred. Please try again.');
        }
    }
    else {
        toast.error('An unexpected error occurred. Please try again.');
    }

}

const api = axios.create({
    baseURL: import.meta.env.API_BASE_URL || "http://localhost:3000",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.request.use(
    (config) => {
        // TODO: Check for possibility to read token.
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => {
        console.log("Request Error: ", error)
        return Promise.reject(error)
    }
)

api.interceptors.response.use(
    (res) => {
        return res.data
    },
    (error) => {
        console.error('Response Error:', error);
        toastErrors(error)
        return Promise.reject(error)
    }

)

export default api