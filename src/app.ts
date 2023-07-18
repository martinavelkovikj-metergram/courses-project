import express from "express";
import { AppSource } from "./util/database";
import { Course } from "./Model/Course";
import { fetchCoursesAndStore } from "./data-handler/fetch-store-data";

const app = express();
app.use(express.json());

AppSource.initialize()
  .then(async () => {
    await Course.delete({});
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
    console.log("Connected to DB");
    await fetchCoursesAndStore();
    console.log("Successfully stored data!");
  })
  .catch((err) => {
    console.log(err);
  });
