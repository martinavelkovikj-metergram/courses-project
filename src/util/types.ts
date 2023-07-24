import { Company } from "../model/company";
import { Course } from "../model/course";
import { Participant } from "../model/participant";

export type CourseParams = {
  id: number;
  date: Date;
  course_name: string;
};

export interface AuthResponse {
  data: {
    accessToken: string;
  };
}

export type ParticipantParams = {
    name: string;
    phone_number: string;
    email: string;
  };

  export type CompanyParams = {
    name: string;
    phone_number: string;
    email: string;
    participants: Participant []
  };

  export type ApplicationParams = {
    participants: Participant[];
    company: Company;
    course: Course;
  };