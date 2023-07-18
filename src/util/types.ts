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
