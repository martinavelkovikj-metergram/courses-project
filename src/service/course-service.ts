import { CoursesRepository } from "../repository/courses-repository";

export class CourseService {
  async deleteCourse(courseId: number) {
    try {
      return await new CoursesRepository().deleteCourse(courseId);
    } catch (err) {
      console.error(err);
    }
  }

  async getAllCourses() {
    try {
      return await new CoursesRepository().getAllCourses();
    } catch (err) {
      console.error(err);
    }
  }

  async getCourseById(courseId: number) {
    try {
      return await new CoursesRepository().getCourseById(courseId);
    } catch (err) {
      console.error(err);
    }
  }
}
