import { CreateDriverDetailInput } from './create-driver_detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDriverDetailInput extends PartialType(CreateDriverDetailInput) {
  @Field(() => Int)
  id: number;
}
