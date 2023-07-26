import { Course } from '../model/course';

export class CoursesRepository {
  async deleteCourse(courseId: number): Promise<Course> {
    try {
      const course = await this.getCourseById(courseId);
      if (course !== null) {
        return await Course.remove(course);
      } else {
        throw new Error('Deleting course failed!');
      }
    } catch (err) {
      console.log(err);
      throw new Error('Deleting course failed!');
    }
  }

  async getAllCourses(): Promise<Course[]> {
    try {
      return await Course.find();
    } catch (err) {
      console.error(err);
      throw new Error('Fetching courses failed!');
    }
  }

  async getCourseById(courseId: number): Promise<Course | null> {
    try {
      return await Course.findOne({
        where: {
          course_id: courseId
        }
      });
    } catch (err) {
      console.error(err);
      throw new Error('Fetching course failed!');
    }
  }
}
