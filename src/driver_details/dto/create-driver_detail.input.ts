import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from "class-validator"
import * as GraphQLUpload from 'graphql-upload/GraphQLUpload.js';
import { Stream } from 'stream';

export interface FileUpload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}

@InputType()
export class CreateDriverDetailInput {

  @Field(()=>GraphQLUpload)
  @IsNotEmpty()
  @IsString()
  image : Promise<FileUpload>
  
}
