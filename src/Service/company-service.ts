import { CompanyParams } from "../util/types";
import { CompanyRepository } from "../Repository/company-repository";

export class CompanyService {
  async createCompany(companyParams: CompanyParams) {
    try {
      return await new CompanyRepository().createCompany(companyParams);
    } catch (err) {
      console.error(err);
    }
  }

  async deleteCompany(companyId: number) {
    try {
      return await new CompanyRepository().deleteCompany(companyId);
    } catch (err) {
      console.error(err);
    }
  }

  async getAllCompanies() {
    try {
      return await new CompanyRepository().getAllCompanies();
    } catch (err) {
      console.error(err);
    }
  }

  async getCompanyById(companyId: number) {
    try {
      return await new CompanyRepository().getCompanyById(companyId);
    } catch (err) {
      console.error(err);
    }
  }
}
