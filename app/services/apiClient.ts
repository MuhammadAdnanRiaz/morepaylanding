// services/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8004', // Update with your base URL
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

export default apiClient;
