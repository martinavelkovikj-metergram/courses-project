import { type Course } from '../model/course';
import { CoursesRepository } from '../repository/courses-repository';

export class CourseService {
  async deleteCourse(courseId: number): Promise<Course> {
    try {
      return await new CoursesRepository().deleteCourse(courseId);
    } catch (err) {
      console.error(err);
      throw new Error('Deleting courses failed!');
    }
  }

  async getAllCourses(): Promise<Course[]> {
    try {
      return await new CoursesRepository().getAllCourses();
    } catch (err) {
      console.error(err);
      throw new Error('Fetching courses failed!');
    }
  }

  async getCourseById(courseId: number): Promise<Course | null> {
    try {
      return await new CoursesRepository().getCourseById(courseId);
    } catch (err) {
      console.error(err);
      throw new Error('Fetching course failed!');
    }
  }
}
