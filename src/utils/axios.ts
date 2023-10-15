import axios from 'axios';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------------

const API_URL = process.env.REACT_APP_API_URL || ''

const axiosInstance = axios.create({ baseURL: API_URL });

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },

  (error: any) => {
    const data = error?.response?.data;
    console.log('er',data)
    if (data?.error && typeof data?.error === 'string') {
        toast.error(data?.error)
      }
    return Promise.reject((data) || 'Something went wrong');
  }
);

export default axiosInstance;
