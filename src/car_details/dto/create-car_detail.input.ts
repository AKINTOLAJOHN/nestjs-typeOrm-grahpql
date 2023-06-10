import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';

@InputType()
export class CreateCarDetailInput {

  @Field()
  @IsNotEmpty()
  @IsString()
  image_linkk : string


  
}
