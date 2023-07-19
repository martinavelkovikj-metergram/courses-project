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
          name: participantParams.name,
          phone_number: participantParams.phone_number,
          email: participantParams.email,
          company: company,
        }).save();
      }
    } catch (err) {
      console.error(err);
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
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getAllParticipants() {
    try {
      return await Participant.find();
    } catch (err) {
      console.error(err);
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
    }
  }
}
