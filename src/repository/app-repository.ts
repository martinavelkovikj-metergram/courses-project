import { Application } from '../model/application'
import { Company } from '../model/company'
import { Course } from '../model/course'
import { type ApplicationParams } from '../util/types'

export class ApplicationRepository {
  async createApplication (applicationParams: ApplicationParams): Promise<Application> {
    try {
      const { participants, company, course } = applicationParams
      if (!company || !course || participants.some((p) => !p)) {
        throw new Error('Application parameters missing!')
      }
      const existingCompany = await Company.findOne({
        where: {
          company_id: company.company_id
        }
      })

      const existingCourse = await Course.findOne({
        where: {
          course_id: course.course_id
        }
      })

      if ((existingCompany == null) || (existingCourse == null)) {
        throw new Error('No such Course or Company!')
      }

      return await Application.create({ ...applicationParams }).save()
    } catch (err) {
      console.error(err)
      throw new Error('Creating application failed!')
    }
  }

  async deleteApplication (appId: number): Promise<Application> {
    try {
      const application = await this.getApplicationById(appId)
      if (application != null) {
        return await Application.remove(application)
      } else {
        throw new Error('Deleting application failed!')
      }
    } catch (err) {
      console.log(err)
      throw new Error('Deleting application failed!')
    }
  }

  async getAllApplications (): Promise<Application[]> {
    try {
      return await Application.find()
    } catch (err) {
      console.error(err)
      throw new Error('Fetching applications failed!')
    }
  }

  async getApplicationById (appId: number): Promise<Application | null> {
    try {
      return await Application.findOne({
        where: {
          application_id: appId
        }
      })
    } catch (err) {
      console.error(err)
      throw new Error('Fetching application failed!')
    }
  }
}
