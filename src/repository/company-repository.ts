import { Company } from '../model/company';
import { type CompanyParams } from '../util/types';

export class CompanyRepository {
  async createCompany(companyParams: CompanyParams): Promise<Company> {
    try {
      return await Company.create({ ...companyParams }).save();
    } catch (err) {
      console.error(err);
      throw new Error('Creating company failed!');
    }
  }

  async deleteCompany(companyId: number): Promise<Company> {
    try {
      const company = await this.getCompanyById(companyId);
      if (company !== null) {
        return await Company.remove(company);
      } else {
        throw new Error('Deleting company failed!');
      }
    } catch (err) {
      console.log(err);
      throw new Error('Deleting company failed!');
    }
  }

  async getAllCompanies(): Promise<Company[]> {
    try {
      return await Company.find();
    } catch (err) {
      console.error(err);
      throw new Error('Fetching companies failed!');
    }
  }

  async getCompanyById(companyId: number): Promise<Company | null> {
    try {
      return await Company.findOne({
        where: {
          company_id: companyId
        }
      });
    } catch (err) {
      console.error(err);
      throw new Error('Fetching company failed!');
    }
  }
}
