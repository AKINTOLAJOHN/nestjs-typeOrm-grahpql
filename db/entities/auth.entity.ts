import { ObjectType, Field, Int } from '@nestjs/graphql';
import { DriverDetail } from 'db/entities/driver_detail.entity';
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToMany, BeforeInsert, BeforeUpdate, OneToOne,JoinColumn, JoinTable } from 'typeorm'
import { CarDetail } from './car_detail.entity';
import { hashSync, compareSync } from 'bcrypt';

@ObjectType()
@Entity()
export class Auth {

  @Field(type => Int)
  @PrimaryGeneratedColumn("increment")
  id : number

  @Field(type => String)
  @Column({ type: 'varchar', length: 50, nullable: false, unique: true })
  email : string


  @Field(type => String)
  @Column()
  pword : string

  @Field(type => String)
  @Column()
  firstname : string

  @Field(type => String)
  @Column()
  lastname : string

  @Field(type => String)
  @Column({default : null})
  resetPasswordToken? : string

  @Field(type => String)
  @Column({default : null})
  resetPasswordExpires? : string

  @Field(type => String)
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;


}
