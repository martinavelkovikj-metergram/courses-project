import { ParticipantRepository } from "../Repository/participant-repository";
import { ParticipantParams } from "../util/types";

export class ParticipantService {
  async createParticipant(participantParams: ParticipantParams, companyId: number) {
    try {
      return await new ParticipantRepository().createParticipant(
        participantParams, companyId
      );
    } catch (err) {
      console.error(err);
    }
  }

  async deleteParticipant(participantId: number) {
    try {
      return await new ParticipantRepository().deleteParticipant(participantId);
    } catch (err) {
      console.error(err);
    }
  }

  async getAllParticipants(){
    try {
        return await new ParticipantRepository().getAllParticipants();
      } catch (err) {
        console.error(err);
      }
  }

  async getAllParticipantsFromCompany(companyId:number){
    try {
        return await new ParticipantRepository().getAllParticipantsFromCompany(companyId);
      } catch (err) {
        console.error(err);
      }
  }

  async getParticipant(participantId:number){
    try {
        return await new ParticipantRepository().getParticipantById(participantId);
      } catch (err) {
        console.error(err);
      }
  }
  
}
