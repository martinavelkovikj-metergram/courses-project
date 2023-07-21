import { ApplicationService } from "../service/application-service";
import { ApplicationParams } from "../util/types";

export class Applications {
  async createApplication(applicationParams: ApplicationParams) {
    try {
      return new ApplicationService().createApplication(
        applicationParams
      );
    } catch (err) {
      console.error(err);
      throw new Error("Creating application failed!");
    }
  }

  async deleteApplication(appId: number) {
    try {
      return new ApplicationService().deleteApplication(appId);
    } catch (err) {
      console.error(err);
      throw new Error("Deleting application failed!");
    }
  }

  async getAllApplications() {
    try {
      return new ApplicationService().getAllApplications();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching applications failed!");
    }
  }

  async getApplicationById(appId: number) {
    try {
      return new ApplicationService().getApplicationById(appId);
    } catch (err) {
      console.error(err);
      throw new Error("Fetching application failed!");
    }
  }
}
