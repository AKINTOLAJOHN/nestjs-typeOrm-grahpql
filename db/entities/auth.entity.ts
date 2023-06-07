import { ObjectType, Field, Int } from '@nestjs/graphql';
import { DriverDetail } from 'db/entities/driver_detail.entity';
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm'
import { CarDetail } from './car_detail.entity';

@ObjectType()
export class Auth {

  @Field(type => Int)
  @PrimaryGeneratedColumn('uuid')
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
  @Column()
  resetPasswordToken? : string

  @Field(type => String)
  @Column()
  resetPasswordExpires? : string

  @Field(type => String)
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  // @OneToMany(() => DriverDetail, (driver) => driver.id)
  // driver : DriverDetail[]

  // @OneToMany(()=> CarDetail, (CarDetail) => CarDetail.id)
  // car : CarDetail[]

}