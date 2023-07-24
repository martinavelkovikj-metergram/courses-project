import { Participant } from '../model/participant'
import { type ParticipantParams } from '../util/types'
import { Company } from '../model/company'

export class ParticipantRepository {
  async createParticipant (participantParams: ParticipantParams, companyId: number): Promise<Participant> {
    try {
      const company = await Company.findOne({
        where: { company_id: companyId }
      })
      if (company != null) {
        return await Participant.create({
          ...participantParams,
          company
        }).save()
      } else {
        throw new Error('Company doesnt exist')
      }
    } catch (err) {
      console.error(err)
      throw new Error('Creating participant failed!')
    }
  }

  async deleteParticipant (participantId: number): Promise<Participant> {
    try {
      const participant = await this.getParticipantById(participantId)
      if (participant != null) {
        return await Participant.remove(participant)
      } else {
        throw new Error('Participant not found')
      }
    } catch (err) {
      console.log(err)
      throw new Error('Deleting participant failed')
    }
  }

  async getAllParticipants (): Promise<Participant[]> {
    try {
      return await Participant.find()
    } catch (err) {
      console.error(err)
      throw new Error('Fetching participants failed')
    }
  }

  async getAllParticipantsFromCompany (companyId: number): Promise<Participant[]> {
    try {
      const participants = Participant.createQueryBuilder('participant')
        .leftJoinAndSelect('participant.company', 'company')
        .where('company.company_id = :companyId', { companyId })
        .getMany()

      return await participants
    } catch (err) {
      console.error(err)
      throw new Error('Fetching participants failed')
    }
  }

  async getParticipantById (participantId: number): Promise<Participant | null> {
    try {
      return await Participant.findOne({
        where: {
          participant_id: participantId
        }
      })
    } catch (err) {
      console.error(err)
      throw new Error('Fetching participant failed')
    }
  }
}
