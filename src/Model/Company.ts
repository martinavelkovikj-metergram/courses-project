import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from "typeorm";
import { Application } from "./application";

@Entity()
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  company_id!: number;

  @Column()
  name!: string;

  @Column()
  phone_number!: string; 

  @Column()
  email!: string;

  @OneToMany(() => Application, application => application.company)
  applications?: Application[];
}
