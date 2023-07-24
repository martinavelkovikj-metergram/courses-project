import { CoursesRepository } from "../repository/courses-repository";

export class CourseService {
  async deleteCourse(courseId: number) {
    try {
      return new CoursesRepository().deleteCourse(courseId);
    } catch (err) {
      console.error(err);
      throw new Error("Deleting courses failed!");
    }
  }

  async getAllCourses() {
    try {
      return new CoursesRepository().getAllCourses();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching courses failed!");
    }
  }

  async getCourseById(courseId: number) {
    try {
      return new CoursesRepository().getCourseById(courseId);
    } catch (err) {
      console.error(err);
      throw new Error("Fetching course failed!");
    }
  }
}
