import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || '/api', 
    withCredentials: true,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Accept': 'application/json',
    },
});

// Interceptor to handle CSRF token
api.interceptors.request.use(async (config) => {
    // For methods that change state, ensure we have the CSRF cookie first
    if (['post', 'put', 'patch', 'delete'].includes(config.method?.toLowerCase())) {
        const csrfUrl = process.env.NEXT_PUBLIC_CSRF_URL || '/sanctum/csrf-cookie';
        await axios.get(csrfUrl, { withCredentials: true });
    }
    return config;
});

export default api;
