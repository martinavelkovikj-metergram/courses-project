import { type Participant } from '../model/participant';
import { ParticipantService } from '../service/participant-service';
import { type ParticipantParams } from '../util/types';

export class Participants {
  async createParticipant(
    participantParams: ParticipantParams,
    companyId: number
  ): Promise<Participant> {
    try {
      return await new ParticipantService().createParticipant(
        participantParams,
        companyId
      );
    } catch (err) {
      console.error(err);
      throw new Error('Creating participant failed!');
    }
  }

  async deleteParticipant(participantId: number): Promise<Participant> {
    try {
      return await new ParticipantService().deleteParticipant(participantId);
    } catch (err) {
      console.error(err);
      throw new Error('Deleting participant failed!');
    }
  }

  async getAllParticipants(): Promise<Participant[]> {
    try {
      return await new ParticipantService().getAllParticipants();
    } catch (err) {
      console.error(err);
      throw new Error('Fetching participants failed!');
    }
  }

  async getAllParticipantsFromCompany(companyId: number): Promise<Participant[]> {
    try {
      return await new ParticipantService().getAllParticipantsFromCompany(
        companyId
      );
    } catch (err) {
      console.error(err);
      throw new Error('Fetching participants failed!');
    }
  }

  async getParticipant(participantId: number): Promise<Participant | null> {
    try {
      return await new ParticipantService().getParticipant(participantId);
    } catch (err) {
      console.error(err);
      throw new Error('Fetching participant failed!');
    }
  }
}
