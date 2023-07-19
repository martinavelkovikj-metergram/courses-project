import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  BaseEntity,
} from "typeorm";
import { Participant } from "./participant"
import { Course } from './course';
import { Company } from "./company";

@Entity()
export class Application extends BaseEntity {
  @PrimaryGeneratedColumn()
  application_id!: number;

  @ManyToOne(() => Company, (company) => company.applications, {
    cascade: true,
  })
  @JoinTable()
  company!: Company;

  @ManyToOne(() => Course, (course) => course.applications, {
    onDelete: "CASCADE",
  })
  @JoinTable()
  course!: Course;

  @ManyToMany(() => Participant, (participant) => participant.applications, {
    cascade: true,
  })
  @JoinTable()
  participants!: Participant[];
}
