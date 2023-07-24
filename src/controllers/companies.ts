import { CompanyService } from "../service/company-service";
import { CompanyParams } from "../util/types";

export class Companies {
  async createCompany(CompanyParams: CompanyParams) {
    try {
      return new CompanyService().createCompany(CompanyParams);
    } catch (err) {
      console.error(err);
      throw new Error("Creating company failed!");
    }
  }

  async deleteCompany(companyId: number) {
    try {
      return new CompanyService().deleteCompany(companyId);
    } catch (err) {
      console.error(err);
      throw new Error("Deleting company failed!");
    }
  }

  async getAllCompanies() {
    try {
      return new CompanyService().getAllCompanies();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching companies failed!");
    }
  }

  async getCompanyById(companyId: number) {
    try {
      return new CompanyService().getCompanyById(companyId);
    } catch (err) {
      console.error(err);
      throw new Error("Fetching company failed!");
    }
  }
}
