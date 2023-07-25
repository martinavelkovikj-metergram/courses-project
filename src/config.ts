import dotenv from 'dotenv';
dotenv.config();

interface DbConfig {
  username: string
  password: string
  database: string
}

interface Config {
  db: DbConfig
  apiKey: string
  apiUrl: string
  internalApiKey: string
}

function readEnvVariable(key: string): string {
  const value = process.env[key];
  if (value == null) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

const config: Config = {
  db: {
    username: readEnvVariable('DATABASE_USERNAME'),
    password: readEnvVariable('DATABASE_PASSWORD'),
    database: readEnvVariable('DATABASE_NAME')
  },
  apiKey: readEnvVariable('API_KEY'),
  apiUrl: readEnvVariable('API_URL'),
  internalApiKey: readEnvVariable('INTERNAL_API_KEY')
};

export { config };
