import { ObjectType, Field, Int } from '@nestjs/graphql';
import {UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn, Column, ManyToOne, Entity, OneToOne, JoinTable, JoinColumn} from 'typeorm'
import { Auth } from './auth.entity';

@ObjectType()
@Entity()
export class DriverDetail {
    
        @Field(type => Int)
        @PrimaryGeneratedColumn("increment")
        id : number

        @Field(type => String)
        @Column()
        image_link : string

        @Field(type => String)
        @Column()
        mimetype: string;
      
        @Field(type => String)
        @Column()
        encoding: string;

        @OneToOne(() => Auth)
        @JoinColumn({name : 'user_driver'})
        user_id : Auth

        @Field(type => String)
        @CreateDateColumn({name: 'created_at'})
        createdAt: Date;
      
        @UpdateDateColumn({name: 'updated_at'})
        updatedAt: Date;


}
