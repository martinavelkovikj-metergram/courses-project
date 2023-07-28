import { config } from "./config";
import * as entities from './model/entities';
import * as migrations from './migration/migrations';

export const configuration ={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: config.db.username,
    password: config.db.password,
    database: config.db.database,
    entities: Object.values(entities),
    migrations: Object.values(migrations)
    
  }