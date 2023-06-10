import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from "class-validator"

@InputType()
export class CreateDriverDetailInput {

  @Field()
  @IsNotEmpty()
  @IsString()
  image_linkk : string
  
}
