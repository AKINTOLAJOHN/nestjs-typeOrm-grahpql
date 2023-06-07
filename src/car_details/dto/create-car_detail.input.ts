import { InputType, Int, Field } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';

@InputType()
export class CreateCarDetailInput {

  @Field()
  @IsNotEmpty()
  @IsString()
  car_Name : string

  @Field()
  @IsNotEmpty()
  @IsString()
  plate_Number : string

  @Field()
  @IsNotEmpty()
  @IsString()
  car_color : string

  @Field()
  @IsNotEmpty()
  @IsString()
  data_purchase : string

  @Field()
  @IsNotEmpty()
  @IsString()
  engine_number : string

  @Field()
  @IsNotEmpty()
  @IsString()
  state : string

  @Field()
  @IsNotEmpty()
  @IsString()
  image_linkk : string

  @Field()
  @IsNotEmpty()
  @IsString()
  country : string

  
}
