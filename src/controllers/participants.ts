import { ParticipantService } from "../service/participant-service";
import { ParticipantParams } from "../util/types";

export class Participants {
  async createParticipant(
    participantParams: ParticipantParams,
    companyId: number
  ) {
    try {
      return new ParticipantService().createParticipant(
        participantParams,
        companyId
      );
    } catch (err) {
      console.error(err);
      throw new Error("Creating participant failed!");
    }
  }

  async deleteParticipant(participantId: number) {
    try {
      return new ParticipantService().deleteParticipant(participantId);
    } catch (err) {
      console.error(err);
      throw new Error("Deleting participant failed!");
    }
  }

  async getAllParticipants() {
    try {
      return new ParticipantService().getAllParticipants();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching participants failed!");
    }
  }

  async getAllParticipantsFromCompany(companyId: number) {
    try {
      return new ParticipantService().getAllParticipantsFromCompany(
        companyId
      );
    } catch (err) {
      console.error(err);
      throw new Error("Fetching participants failed!");
    }
  }

  async getParticipant(participantId: number) {
    try {
      return new ParticipantService().getParticipant(participantId);
    } catch (err) {
      console.error(err);
      throw new Error("Fetching participant failed!");
    }
  }
}
