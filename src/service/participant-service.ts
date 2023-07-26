import { type Participant } from '../model/participant';
import { ParticipantRepository } from '../repository/participant-repository';
import { type ParticipantParams } from '../util/types';

export class ParticipantService {
  async createParticipant(
    participantParams: ParticipantParams,
    companyId: number
  ): Promise<Participant> {
    try {
      return await new ParticipantRepository().createParticipant(
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
      return await new ParticipantRepository().deleteParticipant(participantId);
    } catch (err) {
      console.error(err);
      throw new Error('Deleting participant failed!');
    }
  }

  async getAllParticipants(): Promise<Participant[]> {
    try {
      return await new ParticipantRepository().getAllParticipants();
    } catch (err) {
      console.error(err);
      throw new Error('Fetching participants failed!');
    }
  }

  async getAllParticipantsFromCompany(companyId: number): Promise<Participant[]> {
    try {
      return await new ParticipantRepository().getAllParticipantsFromCompany(
        companyId
      );
    } catch (err) {
      console.error(err);
      throw new Error('Fetching participants failed!');
    }
  }

  async getParticipant(participantId: number): Promise<Participant | null> {
    try {
      return await new ParticipantRepository().getParticipantById(
        participantId
      );
    } catch (err) {
      console.error(err);
      throw new Error('Fetching participant failed!');
    }
  }
}
