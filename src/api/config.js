import axios from 'axios';

export const axiosInstance = axios.create(
    {
        baseUrl: "https://api.themoviedb.org/3/movie"
    }
);