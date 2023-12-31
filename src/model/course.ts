import { Entity, Column, PrimaryColumn, BaseEntity, OneToMany } from 'typeorm';
import { Application } from './application';

@Entity()
export class Course extends BaseEntity {
  @PrimaryColumn()
    course_id!: number;

  @PrimaryColumn()
    date!: Date;

  @Column()
    name!: string;

  @OneToMany(() => Application, application => application.course)
    applications?: Application[];
}
