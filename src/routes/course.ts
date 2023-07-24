import express, { Request, Response } from "express";
import { Courses } from "../controllers/courses";
import { authorizeRequest } from "../middleware/authorize-requests";
export const courseRouter = express.Router();

courseRouter.use(authorizeRequest);
courseRouter.delete("/courses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const companyId = await new Courses().deleteCourse(parseInt(id));
    res.send({ deletedCourseId: id });
  } catch (err) {
    res.status(500).send({ error: "Failed deleting course" });
  }
});

courseRouter.get("/courses", async (req, res) =>
  res.send(await new Courses().getAllCourses()) 
);

courseRouter.get("/courses/:id", async (req, res) => {
  const { id } = req.params;
  return res.send(await new Courses().getCourseById(parseInt(id)));
});
