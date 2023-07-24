import { type Company } from '../model/company'
import { CompanyService } from '../service/company-service'
import { type CompanyParams } from '../util/types'

export class Companies {
  async createCompany (CompanyParams: CompanyParams): Promise<Company> {
    try {
      return await new CompanyService().createCompany(CompanyParams)
    } catch (err) {
      console.error(err)
      throw new Error('Creating company failed!')
    }
  }

  async deleteCompany (companyId: number): Promise<Company> {
    try {
      return await new CompanyService().deleteCompany(companyId)
    } catch (err) {
      console.error(err)
      throw new Error('Deleting company failed!')
    }
  }

  async getAllCompanies (): Promise<Company[]> {
    try {
      return await new CompanyService().getAllCompanies()
    } catch (err) {
      console.error(err)
      throw new Error('Fetching companies failed!')
    }
  }

  async getCompanyById (companyId: number): Promise<Company | null> {
    try {
      return await new CompanyService().getCompanyById(companyId)
    } catch (err) {
      console.error(err)
      throw new Error('Fetching company failed!')
    }
  }
}
