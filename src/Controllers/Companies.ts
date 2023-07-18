
import { CompanyService } from "../Service/company-service";
import { CompanyParams } from "../util/types";

export class Companies {
  async createCompany(CompanyParams: CompanyParams) {
    try {
      return await new CompanyService().createCompany(CompanyParams);
    } catch (err) {
      console.error(err);
    }
  }

  async deleteCompany(companyId: number) {
    try {
      return await new CompanyService().deleteCompany(companyId);
    } catch (err) {
      console.error(err);
    }
  }

  async getAllCompanies() {
    try {
      return await new CompanyService().getAllCompanies();
    } catch (err) {
      console.error(err);
    }
  }

  async getCompanyById(companyId: number) {
    try {
      return await new CompanyService().getCompanyById(companyId);
    } catch (err) {
      console.error(err);
    }
  }
}
