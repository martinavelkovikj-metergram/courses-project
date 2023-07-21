import { DataSource } from "typeorm";

import { Company } from "../model/company";
import { Participant } from "../model/participant";
import { Course } from "../model/course";

import { config } from "../config";
import { Application } from "../model/application";

export const AppSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: config.db.username,
  password: config.db.password,
  database: config.db.data_base,
  entities: [Company, Course, Participant, Application],
  synchronize: true,
});
