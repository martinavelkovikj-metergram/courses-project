import { Course } from "../model/course";

export class CoursesRepository {
  async deleteCourse(courseId: number) {
    try {

      const course= await this.getCourseById(courseId);
      if (course) {
        return Course.remove(course);
      }
    } catch (err) {
      console.log(err); 
      throw new Error("Deleting course failed!");
    }
  }

  async getAllCourses() {
    try {
      return Course.find();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching courses failed!");
    }
  }

  async getCourseById(courseId: number) {
    try {
      return Course.findOne({
        where: {
          course_id: courseId,
        },
      });
    } catch (err) {
      console.error(err);
      throw new Error("Fetching course failed!");
    }
  }
}
