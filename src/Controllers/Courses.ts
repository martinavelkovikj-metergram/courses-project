
import { CourseService } from "../Service/course-service";

export class Courses {
 
  async deleteCourse(courseId: number) {
    try {
      return await new CourseService().deleteCourse(courseId);
    } catch (err) {
      console.error(err);
    }
  }

  async getAllCourses() {
    try {
      return await new CourseService().getAllCourses();
    } catch (err) {
      console.error(err);
    }
  }

  async getCourseById(courseId: number) {
    try {
      return await new CourseService().getCourseById(courseId);
    } catch (err) {
      console.error(err);
    }
  }
}
