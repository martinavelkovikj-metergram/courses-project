import express, { Request, Response } from "express";
import { Participants } from "../controllers/participants";
import { ParticipantParams } from "../util/types";
import { authorizeRequest } from "../middleware/authorize-requests";
import { validateParticipantFields } from "../middleware/validation";
import { handleValidationErrors } from "../middleware/validation-error-handler";
export const participantRouter = express.Router();

participantRouter.use(authorizeRequest);
participantRouter.post("/participant",validateParticipantFields, handleValidationErrors , async (req: Request, res: Response) => {
  try {
    const participantParams: ParticipantParams = req.body.participantParams;
    const companyId: number = req.body.companyId;
    res.send(
      await new Participants().createParticipant(participantParams, companyId)
    );
  } catch (err) {
    console.error(err);
  }
});

participantRouter.delete("/participant/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await new Participants().deleteParticipant(parseInt(id));
    res.send({ deletedParticipantId: id });
  } catch (err) {
    res.status(500).send({ error: "Failed deleting participant" });
  }
});

participantRouter.get("/participant", async (req, res) =>
  res.send(await new Participants().getAllParticipants())
);

participantRouter.get("/participant/:id", async (req, res) => {
  const { id } = req.params;
  return res.send(await new Participants().getParticipant(parseInt(id)));
});

participantRouter.get("/participantFrom/:id", async (req, res) => {
  const { id } = req.params;
  return res.send(
    await new Participants().getAllParticipantsFromCompany(parseInt(id)) 
  );
});
