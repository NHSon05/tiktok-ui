import axios from "axios";

console.log(import.meta.env);

export const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path,options);
    return response.data;
}

// Local    //Development
// Test
// Production
