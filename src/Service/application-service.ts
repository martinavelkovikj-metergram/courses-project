import { ApplicationParams } from "../util/types";
import { ApplicationRepository } from "../Repository/app-repository";

export class ApplicationService {
  async createApplication(appParams: ApplicationParams) {
    try {
      return await new ApplicationRepository().createApplication(appParams);
    } catch (err) {
      console.error(err);
    }
  }

  async deleteApplication(appId: number) {
    try {
      return await new ApplicationRepository().deleteApplication(appId);
    } catch (err) {
      console.error(err);
    }
  }

  async getAllApplications() {
    try {
      return await new ApplicationRepository().getAllApplications();
    } catch (err) {
      console.error(err);
    }
  }

  async getApplicationById(appId: number) {
    try {
      return await new ApplicationRepository().getApplicationById(appId);
    } catch (err) {
      console.error(err);
    }
  }
}
