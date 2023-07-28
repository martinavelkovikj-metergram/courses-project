import axios from "axios";
import { Course } from "../model/course";
import { type CourseParams } from "../util/types";
import { handleAPIError } from "./api-error-handler";
import { getAccessToken } from "./get-access-token";
import { config } from "../config";

export async function fetchCoursesAndStore(): Promise<void> {
  try {
    const accessToken = await getAccessToken();
    let nextPageLink = `${config.apiUrl}/api/courses`;

    while (nextPageLink) {
      const coursesResponse = await axios.get(nextPageLink, {
        headers: {
          Authorization: `Bearer ${accessToken ?? ""}`,
        },
      });

      const coursesData = coursesResponse.data.data;
      console.log(coursesData);

      await Promise.all(
        coursesData.map(async (course: CourseParams) => {
          const newCourse = new Course();
          newCourse.date = new Date(course.date);
          newCourse.course_id = course.id;
          newCourse.name = course.course_name;
          await newCourse.save();
        })
      );

      if (coursesResponse.data.next_page_link) {
        /**
         * I am using regular expression to extract the string between <>
         * on position [1] is whatever I have in (.+) group, which is the url.
         */
        nextPageLink = coursesResponse.data.next_page_link.match(/<(.+)>/)[1];
        console.log(nextPageLink);
      } else {
        nextPageLink = "";
      }
    }
  } catch (error: any) {
    handleAPIError(error);
  }
}
