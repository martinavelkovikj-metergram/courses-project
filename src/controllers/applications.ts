import { ApplicationService } from "../service/application-service";
import { ApplicationParams } from "../util/types";

export class Applications {
  async createApplication(applicationParams: ApplicationParams) {
    try {
      return await new ApplicationService().createApplication(
        applicationParams
      );
    } catch (err) {
      console.error(err);
    }
  }

  async deleteApplication(appId: number) {
    try {
      return await new ApplicationService().deleteApplication(appId);
    } catch (err) {
      console.error(err);
    }
  }

  async getAllApplications() {
    try {
      return await new ApplicationService().getAllApplications();
    } catch (err) {
      console.error(err);
    }
  }

  async getApplicationById(appId: number) {
    try {
      return await new ApplicationService().getApplicationById(appId);
    } catch (err) {
      console.error(err);
    }
  }
}
