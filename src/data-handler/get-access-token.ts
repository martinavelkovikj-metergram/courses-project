import axios from "axios";
import { config } from "../config";
import { type AuthResponse } from "../util/types";
import { handleAPIError } from "./api-error-handler";

let accessToken: string | undefined;
let expirationTime: number = 0;
let isFetched: boolean = false;

/**
 * Fetches the access token from the external API using the provided API key.
 * Stores the access token and its expiration time for later use.
 * @returns The access token if successfully fetched, or undefined if there was an error.
 */
export async function getAccessToken(): Promise<string | undefined> {
  try {
    if (isFetched && Date.now() < expirationTime) {
      console.log("accessToken retrieved from app");
      return accessToken;
    }
    const response = await axios.post<AuthResponse>(
      `${config.apiUrl}/api/auth`,
      {
        apiKey: config.apiKey,
      }
    );

    accessToken = response.data.data.accessToken;

    // this is a flag variable that indicates if the token has been fetched
    isFetched = true;

    //expiration time is set 5 hours from the first fetch
    expirationTime = Date.now() + 18000000;

    console.log("accesToken retrieved from api");
    return accessToken;
  } catch (error: any) {
    handleAPIError(error);
  }
}
