import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CarDetailsService } from './car_details.service';
import { CarDetail } from '../../db/entities/car_detail.entity';
import { CreateCarDetailInput } from './dto/create-car_detail.input';
import { UpdateCarDetailInput } from './dto/update-car_detail.input';

@Resolver(() => CarDetail)
export class CarDetailsResolver {
  constructor(private readonly carDetailsService: CarDetailsService) {}

  @Mutation(() => CarDetail)
  createCarDetail(@Args('createCarDetailInput') createCarDetailInput: CreateCarDetailInput) {
     this.carDetailsService.create(createCarDetailInput);

  }

  @Query(() => [CarDetail], { name: 'carDetails' })
  findAll() {
    return this.carDetailsService.findAll();
  }

  @Query(() => CarDetail, { name: 'carDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carDetailsService.findOne(id);
  }

  @Mutation(() => CarDetail)
  updateCarDetail(@Args('updateCarDetailInput') updateCarDetailInput: UpdateCarDetailInput) {
    return this.carDetailsService.update(updateCarDetailInput.id, updateCarDetailInput);
  }

  @Mutation(() => CarDetail)
  removeCarDetail(@Args('id', { type: () => Int }) id: number) {
    return this.carDetailsService.remove(id);
  }
}
