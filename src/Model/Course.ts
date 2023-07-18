import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, BaseEntity } from 'typeorm';

@Entity()
export class Course extends BaseEntity{
  @PrimaryColumn()
  course_id!: number;

  @PrimaryColumn()
  date!: Date;

  @Column()
  name!: string;
}