import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, ManyToMany } from 'typeorm';
import { Company } from './Company';
import { Application } from './Application';

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

  @ManyToMany(() => Application,(application)=>application.participants)
  applications!: Application[];
}