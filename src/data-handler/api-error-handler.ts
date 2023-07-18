import { AxiosError } from 'axios';

export const handleAPIError = (error: AxiosError) => {
    if (error.response) {
      console.error('API Error:', error.response.data);
      throw error.response.data;
    } else if (error.request) {
      console.error('No response received:', error.request);
      throw new Error('No response received from the server.');
    } else {
      console.error('Request failed:', error.message);
      throw new Error('Request failed.');
    }
  };