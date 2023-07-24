import { CourseService } from "../service/course-service";

export class Courses {
  async deleteCourse(courseId: number) {
    try {
      return new CourseService().deleteCourse(courseId);
    } catch (err) {
      console.error(err);
      throw new Error("Deleting course failed!");
    }
  }

  async getAllCourses() {
    try {
      return new CourseService().getAllCourses();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching courses failed!");
    }
  }

  async getCourseById(courseId: number) {
    try {
      return new CourseService().getCourseById(courseId);
    } catch (err) {
      console.error(err);
      throw new Error("Fetching course failed!");
    }
  }
}
