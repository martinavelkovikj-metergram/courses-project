import axios from 'axios';
import { config } from "./config";
import { Course } from './Model/Course';
import { CourseParams } from './util/types';

export async function fetchAndStoreCourses() {
    try {
      const authResponse = await axios.post('https://metergram-courses-api.azurewebsites.net/api/auth', {
        apiKey: config.api_key,
      });

    console.log(authResponse.data);
      
      const accessToken = authResponse.data.data.accessToken;
      console.log(accessToken);
  
      const coursesResponse = await axios.get('https://metergram-courses-api.azurewebsites.net/api/courses', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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
    } catch (error) {
      console.error('Error fetching and storing courses:', error);
      throw error;
    }
  }