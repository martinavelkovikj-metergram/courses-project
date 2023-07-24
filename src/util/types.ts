import { type Company } from '../model/company'
import { type Course } from '../model/course'
import { type Participant } from '../model/participant'

export interface CourseParams {
  id: number
  date: Date
  course_name: string
}

export interface AuthResponse {
  data: {
    accessToken: string
  }
}

export interface ParticipantParams {
  name: string
  phone_number: string
  email: string
}

export interface CompanyParams {
  name: string
  phone_number: string
  email: string
  participants: Participant []
}

export interface ApplicationParams {
  participants: Participant[]
  company: Company
  course: Course
}
