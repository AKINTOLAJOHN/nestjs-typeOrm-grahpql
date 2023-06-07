import { CreateCarDetailInput } from './create-car_detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarDetailInput extends PartialType(CreateCarDetailInput) {
  @Field(() => Int)
  id: number;
}
