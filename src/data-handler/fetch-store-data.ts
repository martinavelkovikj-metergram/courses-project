import axios from 'axios'
import { Course } from '../model/course'
import { type CourseParams } from '../util/types'
import { handleAPIError } from './api-error-handler'
import { getAccessToken } from './get-access-token'
import { config } from '../config'

export async function fetchCoursesAndStore (): Promise<void> {
  try {
    const accessToken = await getAccessToken()

    const coursesResponse = await axios.get(`${config.apiUrl}/api/courses`, {
      headers: {
        Authorization: `Bearer ${accessToken ?? ''}`
      }
    })

    const coursesData = coursesResponse.data.data
    console.log(coursesData)

    await Promise.all(
      coursesData.map(async (course: CourseParams) => {
        const newCourse = new Course()
        newCourse.date = new Date(course.date)
        newCourse.course_id = course.id
        newCourse.name = course.course_name
        await newCourse.save()
      })
    )
  } catch (error: any) {
    handleAPIError(error)
  }
}
