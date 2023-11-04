import axios from 'axios';
export const instance = axios.create({
    baseURL: 'http://localhost:1337/api/',
    headers: "bearer " + import.meta.env.VITE_TOKEN
})

