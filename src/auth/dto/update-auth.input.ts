import { CreateAuthInput } from './create-auth.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

@InputType()
export class UpdateAuthInput extends PartialType(CreateAuthInput) {

  @Field()
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  password : string
  
}
