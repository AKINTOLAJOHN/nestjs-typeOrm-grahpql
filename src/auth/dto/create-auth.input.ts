import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword, } from 'class-validator';
import { Auth } from 'db/entities/auth.entity';
import { ObjectType } from 'type-graphql';


@InputType()
export class CreateAuthInput {

  @Field()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email : string

  @Field()
  @IsNotEmpty()
  @IsString()
  firstname : string

  @Field()
  @IsNotEmpty()
  @IsString()
  lastname : string

  @Field()
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  pword : string


}




@InputType()
export class InputAuthInput {

  @Field()
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email : string

  @Field()
  @IsNotEmpty()
  @IsString()
  @IsStrongPassword()
  pword : string


}


@ObjectType()
@InputType()
export class AuthType{

  @Field(()=> [Auth!])
  user : Auth; 
  token : string;

}


