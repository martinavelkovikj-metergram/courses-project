import { Participant } from "../model/participant";
import { ParticipantParams } from "../util/types";
import { Company } from "../model/company";

export class ParticipantRepository {
  async createParticipant(
    participantParams: ParticipantParams,
    companyId: number
  ) {
    try {
      const company = await Company.findOne({
        where: { company_id: companyId },
      });
      if (company) {
        return await Participant.create({
            ...participantParams,
            company
        }).save();
      }
    } catch (err) {
      console.error(err);
      throw new Error("Creating participant failed!");
    }
  }

  async deleteParticipant(participantId: number) {
    try {
      const participant = await Participant.findOne({
        where: {
          participant_id: participantId,
        },
      });
      if (participant) {
        return await Participant.remove(participant);
      }else{
        throw new Error("Participant not found");
      } 
    } catch (err) {
      console.log(err);
      throw new Error("Deleting participant failed");
    }
  }

  async getAllParticipants() {
    try {
      return await Participant.find();
    } catch (err) {
      console.error(err);
      throw new Error("Fetching participants failed");
    }
  }

  async getAllParticipantsFromCompany(companyId: number) {
    try {
      let participants = Participant.createQueryBuilder("participant")
        .leftJoinAndSelect("participant.company", "company")
        .where("company.company_id = :companyId", { companyId })
        .getMany();

      return participants;
    } catch (err) {
      console.error(err);
      throw new Error("Fetching participants failed");
    }
  }

  async getParticipantById(participantId: number) {
    try {
      return await Participant.findOne({
        where: {
          participant_id: participantId,
        },
      });
    } catch (err) {
      console.error(err);
      throw new Error("Fetching participant failed");
    }
  }
}
