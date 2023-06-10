import { ObjectType, Field, Int } from '@nestjs/graphql';
import {UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn, Column, ManyToOne, Entity, JoinTable, JoinColumn} from 'typeorm'
import { Auth } from './auth.entity';


@ObjectType()
@Entity()
export class CarDetail {

  @Field(type => Int)
  @PrimaryGeneratedColumn("increment")
  id : number

  @Field(type => String)
  @Column()
  image_link : string

  @ManyToOne(()=> Auth)
  @JoinColumn({name: 'user_cars'})
  car_owner : Auth

  @Field(type => String)
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;


  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;


  
}
