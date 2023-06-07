import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDriverDetailInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
