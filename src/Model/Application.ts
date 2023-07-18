import { Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, BaseEntity } from 'typeorm';
import { Participant } from './Participant';
import { Course } from './Course';
import { Company } from './Company';

@Entity()
export class Application extends BaseEntity {
  @PrimaryGeneratedColumn()
  application_id!: number;

  @ManyToOne(() => Company, company => company.applications)
  @JoinTable()
  company!: Company;

  @ManyToOne(() => Course, course => course.applications)
  @JoinTable()
  course!: Course;

  @ManyToMany(() => Participant, (participant) => participant.applications)
  @JoinTable()
  participants!: Participant[];
}