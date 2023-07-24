import { type ApplicationParams } from '../util/types'
import { ApplicationRepository } from '../repository/app-repository'
import { type Application } from '../model/application'

export class ApplicationService {
  async createApplication (appParams: ApplicationParams): Promise<Application> {
    try {
      return await new ApplicationRepository().createApplication(appParams)
    } catch (err) {
      console.error(err)
      throw new Error('Creating application failed!')
    }
  }

  async deleteApplication (appId: number): Promise<Application> {
    try {
      return await new ApplicationRepository().deleteApplication(appId)
    } catch (err) {
      console.error(err)
      throw new Error('Deleting application failed!')
    }
  }

  async getAllApplications (): Promise<Application[]> {
    try {
      return await new ApplicationRepository().getAllApplications()
    } catch (err) {
      console.error(err)
      throw new Error('Fetching application failed!')
    }
  }

  async getApplicationById (appId: number): Promise<Application | null> {
    try {
      return await new ApplicationRepository().getApplicationById(appId)
    } catch (err) {
      console.error(err)
      throw new Error('Fetching application failed!')
    }
  }
}
