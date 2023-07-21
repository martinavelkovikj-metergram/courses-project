import { ApplicationParams } from "../util/types";
import { ApplicationRepository } from "../repository/app-repository";

export class ApplicationService {
  async createApplication(appParams: ApplicationParams) {
    try {
      return new ApplicationRepository().createApplication(appParams);
    } catch (err) {
      console.error(err);
      throw new Error("Creating application failed!");
    }
  }

  async deleteApplication(appId: number) {
    try {
      return new ApplicationRepository().deleteApplication(appId);
    } catch (err) {
      console.error(err);
      throw new Error("Deleting application failed!");
    }
  }

  async getAllApplications() {
    try {
      return new ApplicationRepository().getAllApplications();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching application failed!");
    }
  }

  async getApplicationById(appId: number) {
    try {
      return new ApplicationRepository().getApplicationById(appId);
    } catch (err) {
      console.error(err);
      throw new Error("Fetching application failed!");

    }
  }
}
