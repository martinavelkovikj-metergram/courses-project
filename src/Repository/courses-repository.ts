import { Course } from "../Model/Course";

export class CoursesRepository {
  async deleteCourse(courseId: number) {
    try {
      const course = await Course.findOne({
        where: {
          course_id: courseId,
        },
      });
      if (course) {
        return await Course.remove(course);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getAllCourses() {
    try {
      return await Course.find();
    } catch (err) {
      console.error(err);
    }
  }

  async getCourseById(courseId: number) {
    try {
      return await Course.findOne({
        where: {
          course_id: courseId,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
}
