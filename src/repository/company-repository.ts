import { Company } from "../model/company";
import { CompanyParams } from "../util/types";

export class CompanyRepository {
  async createCompany(companyParams: CompanyParams) {
    try {
      return await Company.create({ 
        name: companyParams.name,
        phone_number: companyParams.phone_number,
        email: companyParams.email,
      }).save();
    } catch (err) {
      console.error(err); 
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
    }
  }

  async getAllCompanies() {
    try {
      return await Company.find();
    } catch (err) {
      console.error(err);
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
    }
  }
}
