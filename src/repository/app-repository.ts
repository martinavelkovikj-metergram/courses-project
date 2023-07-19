import { Application } from "../model/application";
import { ApplicationParams } from "../util/types";

export class ApplicationRepository {
  async createApplication(applicationParams: ApplicationParams) {
    try {
      const { participants, company, course } = applicationParams;
      if (!company || !course || participants.some((p) => !p)) { 
        return;
      }

      return await Application.create({
        ...applicationParams
      }).save();
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
        return await Application.remove(application);
      }
    } catch (err) {
      console.log(err);
      throw new Error("Deleting application failed!");
    }
  }

  async getAllApplications() {
    try {
      return await Application.find();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching applications failed!");
    }
  }

  async getApplicationById(appId: number) {
    try {
      return await Application.findOne({
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
