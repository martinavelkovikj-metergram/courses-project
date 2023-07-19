import { ParticipantService } from "../service/participant-service";
import { ParticipantParams } from "../util/types";

export class Participants {
  async createParticipant(
    participantParams: ParticipantParams,
    companyId: number
  ) {
    try {
      return await new ParticipantService().createParticipant(
        participantParams,
        companyId
      );
    } catch (err) {
      console.error(err);
    }
  }

  async deleteParticipant(participantId: number) {
    try {
      return await new ParticipantService().deleteParticipant(participantId);
    } catch (err) {
      console.error(err);
    }
  }

  async getAllParticipants() {
    try {
      return await new ParticipantService().getAllParticipants();
    } catch (err) {
      console.error(err);
    }
  }

  async getAllParticipantsFromCompany(companyId: number) {
    try {
      return await new ParticipantService().getAllParticipantsFromCompany(
        companyId
      );
    } catch (err) {
      console.error(err);
    }
  }

  async getParticipant(participantId: number) {
    try {
      return await new ParticipantService().getParticipant(participantId);
    } catch (err) {
      console.error(err);
    }
  }
}
