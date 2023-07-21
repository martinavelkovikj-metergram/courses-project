import { ParticipantRepository } from "../repository/participant-repository";
import { ParticipantParams } from "../util/types";

export class ParticipantService {
  async createParticipant(
    participantParams: ParticipantParams,
    companyId: number
  ) {
    try {
      return new ParticipantRepository().createParticipant(
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
      return new ParticipantRepository().deleteParticipant(participantId);
    } catch (err) {
      console.error(err);
      throw new Error("Deleting participant failed!");
    }
  }

  async getAllParticipants() {
    try {
      return new ParticipantRepository().getAllParticipants();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching participants failed!");
    }
  }

  async getAllParticipantsFromCompany(companyId: number) {
    try {
      return new ParticipantRepository().getAllParticipantsFromCompany(
        companyId
      );
    } catch (err) {
      console.error(err);
      throw new Error("Fetching participants failed!");
    }
  }

  async getParticipant(participantId: number) {
    try {
      return new ParticipantRepository().getParticipantById(
        participantId
      );
    } catch (err) {
      console.error(err);
      throw new Error("Fetching participant failed!");
    }
  }
}
