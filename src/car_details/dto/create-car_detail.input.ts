import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { Readable } from 'stream';

@InputType()
export class CreateCarDetailInput {

  @Field()
  @IsNotEmpty()
  @IsString()
  image_linkk : string

  @Field(()=> Int)
  @IsNotEmpty()
  userId : number

}



export interface FileUpload {

  filename: string;

  mimetype: string;
  
  encoding: string;

  createReadStream: () => Readable;

}