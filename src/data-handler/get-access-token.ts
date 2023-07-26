import axios from 'axios';
import { config } from '../config';
import { type AuthResponse } from '../util/types';
import { handleAPIError } from './api-error-handler';

export async function getAccessToken(): Promise<string | undefined> {
  try {
    const response = await axios.post<AuthResponse>(
      `${config.apiUrl}/api/auth`,
      {
        apiKey: config.apiKey
      }
    );

    return response.data.data.accessToken;
  } catch (error: any) {
    handleAPIError(error);
  }
}
