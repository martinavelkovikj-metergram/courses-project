import dotenv from "dotenv";
dotenv.config();

interface DbConfig {
  username: string;
  password: string;
  data_base: string;
}

interface Config {
  db: DbConfig;
  api_key: String;
  api_url: String;
  internal_api_key: String;
}

function readEnvVariable(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

const config: Config = {
  db: {
    username: readEnvVariable("DATABASE_USERNAME"),
    password: readEnvVariable("DATABASE_PASSWORD"),
    data_base: readEnvVariable("DATABASE_NAME"),
  },
  api_key: readEnvVariable("API_KEY"),
  api_url: readEnvVariable("API_URL"),
  internal_api_key: readEnvVariable("INTERNAL_API_KEY")
};

export { config };