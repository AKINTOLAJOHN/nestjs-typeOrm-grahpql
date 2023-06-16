import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';

import { Readable } from 'stream';


@InputType()
export class CreateCarDetailInput {

  @Field(()=>GraphQLUpload)
  @IsNotEmpty()
  @IsString()
  image  : Promise<FileUpload>

}



export interface FileUpload {

  filename: string;

  mimetype: string;
  
  encoding: string;

  createReadStream: () => Readable;

}