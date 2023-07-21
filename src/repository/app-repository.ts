import { Application } from "../model/application";
import { Company } from "../model/company";
import { Course } from "../model/course";
import { ApplicationParams } from "../util/types";

export class ApplicationRepository {
  async createApplication(applicationParams: ApplicationParams) {
    try {
      const { participants, company, course } = applicationParams;
      if (!company || !course || participants.some((p) => !p)) { 
        throw new Error("Application parameters missing!");
      }
      const existingCompany = await Company.findOne({
        where: {
          company_id: company.company_id,
        },
      });

      const existingCourse = await Course.findOne({
        where: {
          course_id: course.course_id,
        },
      });

      if(!existingCompany || !existingCourse){
        throw new Error("No such Course or Company!");
      }

      return Application.create({...applicationParams}).save();
    } catch (err) {
      console.error(err);
      throw new Error("Creating application failed!");
    }
  }

  async deleteApplication(appId: number) {
    try {
      const application = await Application.findOne({
        where: {
          application_id: appId,
        },
      });
      if (application) {
        return Application.remove(application);
      }
    } catch (err) {
      console.log(err);
      throw new Error("Deleting application failed!");
    }
  }

  async getAllApplications() {
    try {
      return Application.find();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching applications failed!");
    }
  }

  async getApplicationById(appId: number) {
    try {
      return Application.findOne({
        where: {
          application_id: appId,
        },
      });
    } catch (err) {
      console.error(err);
      throw new Error("Fetching application failed!");
    }
  }
}
