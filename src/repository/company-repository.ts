import { Company } from "../model/company";
import { CompanyParams } from "../util/types";

export class CompanyRepository {
  async createCompany(companyParams: CompanyParams) {
    try {
      return await Company.create({ 
        ...companyParams
      }).save();
    } catch (err) {
      console.error(err); 
      throw new Error("Creating company failed!");
    }
  }

  async deleteCompany(companyId: number) {
    try {
      const company = await Company.findOne({
        where: {
          company_id: companyId,
        },
      });
      if (company) {
        return await Company.remove(company);
      }
    } catch (err) {
      console.log(err);
      throw new Error("Deleting company failed!");
    }
  }

  async getAllCompanies() {
    try {
      return await Company.find();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching companies failed!");
    }
  }

  async getCompanyById(companyId: number) {
    try {
      return await Company.findOne({
        where: {
          company_id: companyId,
        },
      });
    } catch (err) {
      console.error(err);
      throw new Error("Fetching company failed!");
    }
  }
}
