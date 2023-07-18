import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from 'typeorm';
import { Company } from './Company';

@Entity()
export class Participant extends BaseEntity{
  @PrimaryGeneratedColumn()
  participant_id!: number;

  @Column()
  name!: string;

  @Column()
  phone_number!: string;

  @Column()
  email!: string;

  @ManyToOne(() => Company)
  company!: Company;
}