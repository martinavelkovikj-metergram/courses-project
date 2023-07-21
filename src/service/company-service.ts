import { CompanyParams } from "../util/types";
import { CompanyRepository } from "../repository/company-repository";

export class CompanyService {
  async createCompany(companyParams: CompanyParams) {
    try {
      return new CompanyRepository().createCompany(companyParams);
    } catch (err) {
      console.error(err);
      throw new Error("Creating company failed!");
    }
  }

  async deleteCompany(companyId: number) {
    try {
      return new CompanyRepository().deleteCompany(companyId);
    } catch (err) {
      console.error(err);
      throw new Error("Deleting company failed!");
    }
  }

  async getAllCompanies() {
    try {
      return new CompanyRepository().getAllCompanies();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching companies failed!");
    }
  }

  async getCompanyById(companyId: number) {
    try {
      return new CompanyRepository().getCompanyById(companyId);
    } catch (err) {
      console.error(err);
      throw new Error("Fetching company failed!");
    }
  }
}
