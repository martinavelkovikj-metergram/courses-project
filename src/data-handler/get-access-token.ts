import axios from 'axios';
import { config } from '../config';
import { AuthResponse } from '../util/types';
import { handleAPIError } from './api-error-handler';

export async function getAccessToken(){
  try {
    const response = await axios.post<AuthResponse>(
      `${config.api_url}/api/auth`,
      {
        apiKey: config.api_key,
      }
    );

    return response.data.data.accessToken;
  } catch (error: any) {
    handleAPIError(error);
  }
}