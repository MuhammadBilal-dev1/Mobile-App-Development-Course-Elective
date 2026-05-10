import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Request Interceptor: Token ya logging ke liye
apiClient.interceptors.request.use(
  (config) => {
    console.log('📡 API Request Sent:', config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Data formatting ya Global Error handling
apiClient.interceptors.response.use(
  (response) => {
    console.log('✅ API Response Received');
    return response;
  },
  (error) => {
    console.error('❌ Interceptor Error:', error.response?.status || 'Network Error');
    return Promise.reject(error);
  }
);

export default apiClient;