import { type CompanyParams } from '../util/types';
import { CompanyRepository } from '../repository/company-repository';
import { type Company } from '../model/company';

export class CompanyService {
  async createCompany(companyParams: CompanyParams): Promise<Company> {
    try {
      return await new CompanyRepository().createCompany(companyParams);
    } catch (err) {
      console.error(err);
      throw new Error('Creating company failed!');
    }
  }

  async deleteCompany(companyId: number): Promise<Company> {
    try {
      return await new CompanyRepository().deleteCompany(companyId);
    } catch (err) {
      console.error(err);
      throw new Error('Deleting company failed!');
    }
  }

  async getAllCompanies(): Promise<Company[]> {
    try {
      return await new CompanyRepository().getAllCompanies();
    } catch (err) {
      console.error(err);
      throw new Error('Fetching companies failed!');
    }
  }

  async getCompanyById(companyId: number): Promise<Company | null> {
    try {
      return await new CompanyRepository().getCompanyById(companyId);
    } catch (err) {
      console.error(err);
      throw new Error('Fetching company failed!');
    }
  }
}
