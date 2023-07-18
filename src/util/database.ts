import { DataSource } from "typeorm";

import { Company } from "../Model/Company";
import { Participant } from "../Model/Participant";
import { Course } from "../Model/Course";

import { config } from "../config";
import { Application } from "../Model/Application";

export const AppSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: config.db.username,
  password: config.db.password,
  database: config.db.database,
  entities: [Company, Course, Participant, Application],
  synchronize: true,
});
