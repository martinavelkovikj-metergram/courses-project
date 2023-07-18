import express from "express";
import { AppSource } from "./util/database";
import { fetchAndStoreCourses } from "./data-handler";
import { Course } from "./Model/Course";

const app = express();
app.use(express.json());

AppSource.initialize()
  .then(async () => {
    await Course.delete({});
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    console.log("Connected to DB");

    await fetchAndStoreCourses();
    console.log("Successfully stored data!");
  })
  .catch((err) => {
    console.log(err);
  });
