import express, { Request, Response } from "express";
import { Applications } from "../controllers/applications";
import { authorizeRequest } from "../middleware/authorize-requests";
import { validateApplicationFields } from "../middleware/validation";
import { handleValidationErrors } from "../middleware/validation-error-handler";
export const appRouter = express.Router();


appRouter.use(authorizeRequest);
appRouter.post("/application",validateApplicationFields,handleValidationErrors,async (req: Request, res: Response) =>{
 try{
    const app= await new Applications().createApplication(req.body);
    res.send(app);
 } catch (err) {
    res.status(500).send({ error: "Failed creating application" });
  }
 
});

appRouter.delete("/application/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ApplicationId = await new Applications().deleteApplication(
      parseInt(id)
    );
    res.send({ deletedApplicationId: id });
  } catch (err) {
    res.status(500).send({ error: "Failed deleting Application" });
  }
});

appRouter.get("/application", async (req, res) =>
  res.send(await new Applications().getAllApplications())
);

appRouter.get("/application/:id", async (req, res) => {
  const { id } = req.params;
  return res.send(await new Applications().getApplicationById(parseInt(id)));
});
