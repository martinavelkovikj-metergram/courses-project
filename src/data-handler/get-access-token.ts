import axios from "axios";
import { config } from "../config";
import { type AuthResponse } from "../util/types";
import { handleAPIError } from "./api-error-handler";
import fs from "fs";
import path from "path";

let accessToken: string | undefined;
let expirationTime: number = 0;
let isFetched: boolean = false;

// Stores the global variables in file.

async function saveTokenData() {
  const tokenFilePath = path.join(__dirname, "/tokenData.json");
  const data = JSON.stringify({ accessToken, expirationTime, isFetched });
  try {
    fs.writeFileSync(tokenFilePath, data, "utf-8");
    console.log("Token data saved to access-token.json");
  } catch (error) {
    console.error("Error saving token data to access-token.json:", error);
  }
}

// loads the global variables from file if stored.
async function loadTokenData() {
  const tokenFilePath = path.join(__dirname, "/tokenData.json");
  if (fs.existsSync(tokenFilePath)) {
    try {
      const data = JSON.parse(fs.readFileSync(tokenFilePath, "utf-8"));
      accessToken = data.accessToken;
      expirationTime = data.expirationTime;
      isFetched = data.isFetched;
    } catch (error) {
      console.error("Error loading data");
    }
  }
}

//stores data into the global variables
async function initTokenData() {
  await loadTokenData();
}

(async () => {
  await initTokenData();
})();

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

    /**
     * if global variables werent changed, it means token-data.json is empty,
     * so we store the variables data there for later use
     */
    saveTokenData();

    console.log("accesToken retrieved from api");

    return accessToken;
  } catch (error: any) {
    handleAPIError(error);
  }
}
