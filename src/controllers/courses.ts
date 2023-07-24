import { type Course } from '../model/course'
import { CourseService } from '../service/course-service'

export class Courses {
  async deleteCourse (courseId: number): Promise<Course> {
    try {
      return await new CourseService().deleteCourse(courseId)
    } catch (err) {
      console.error(err)
      throw new Error('Deleting course failed!')
    }
  }

  async getAllCourses (): Promise<Course[]> {
    try {
      return await new CourseService().getAllCourses()
    } catch (err) {
      console.error(err)
      throw new Error('Fetching courses failed!')
    }
  }

  async getCourseById (courseId: number): Promise<Course | null> {
    try {
      return await new CourseService().getCourseById(courseId)
    } catch (err) {
      console.error(err)
      throw new Error('Fetching course failed!')
    }
  }
}
