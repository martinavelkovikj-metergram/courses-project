import { type Application } from '../model/application'
import { ApplicationService } from '../service/application-service'
import { type ApplicationParams } from '../util/types'

export class Applications {
  async createApplication (applicationParams: ApplicationParams): Promise<Application> {
    try {
      return await new ApplicationService().createApplication(
        applicationParams
      )
    } catch (err) {
      console.error(err)
      throw new Error('Creating application failed!')
    }
  }

  async deleteApplication (appId: number): Promise<Application> {
    try {
      return await new ApplicationService().deleteApplication(appId)
    } catch (err) {
      console.error(err)
      throw new Error('Deleting application failed!')
    }
  }

  async getAllApplications (): Promise<Application[]> {
    try {
      return await new ApplicationService().getAllApplications()
    } catch (err) {
      console.error(err)
      throw new Error('Fetching applications failed!')
    }
  }

  async getApplicationById (appId: number): Promise<Application | null> {
    try {
      return await new ApplicationService().getApplicationById(appId)
    } catch (err) {
      console.error(err)
      throw new Error('Fetching application failed!')
    }
  }
}
