import { ObjectType, Field, Int } from '@nestjs/graphql';
import {UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn, Column, ManyToOne, Entity} from 'typeorm'
import { Auth } from './auth.entity';

@ObjectType()
@Entity()
export class DriverDetail {
    
        @Field(type => Int)
        @PrimaryGeneratedColumn("increment")
        id : number

        @Field(type => String)
        @Column()
        first_Name : string

        @Field(type => String)
        @Column()
        last_Name : string

        @Field(type => String)
        @Column()
        DOB : string

        @Field(type => String)
        @Column()
        health_status :string

        @Field(type => String)
        @Column()
        address : string

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

        @ManyToOne(() => Auth, (userId) => userId.id)
        userId: Auth[]
}
