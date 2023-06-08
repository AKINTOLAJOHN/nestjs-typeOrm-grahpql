import { ObjectType, Field, Int } from '@nestjs/graphql';
import {UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn, Column, ManyToOne, Entity} from 'typeorm'
import { Auth } from './auth.entity';
import { DriverDetail } from './driver_detail.entity';

@ObjectType()
@Entity()
export class CarDetail {

  @Field(type => Int)
  @PrimaryGeneratedColumn("increment")
  id : number

  @Field(type => String)
  @Column()
  car_Name : string

  @Field(type => String)
  @Column()
  plate_Number : string

  @Field(type => String)
  @Column()
  car_color : string

  @Field(type => String)
  @Column()
  date_purchase :string

  @Field(type => String)
  @Column()
  engine_number : string

  @Field(type => String)
  @Column()
  state :string

  @Field(type => String)
  @Column()
  image_link : string

  @Field(type => String)
  @Column()
  country : string

  @Field(type => String)
  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;


  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  @ManyToOne(() => Auth, (auth) => auth.id)
  auth: Auth[]
  
}
