import express, { Request, Response } from "express";
import { Companies } from "../controllers/companies";
export const companyRouter = express.Router();

companyRouter.post("/company", async (req: Request, res: Response) =>
  res.send(await new Companies().createCompany(req.body))
);

companyRouter.delete("/company/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const companyId = await new Companies().deleteCompany(parseInt(id));
    res.send({ deletedCompanyId: id });
  } catch (err) {
    res.status(500).send({ error: "Failed deleting company" });
  }
});

companyRouter.get("/company", async (req, res) =>
  res.send(await new Companies().getAllCompanies())
);

companyRouter.get("/company/:id", async (req, res) => {
  const { id } = req.params;
  return res.send(await new Companies().getCompanyById(parseInt(id)));
});
