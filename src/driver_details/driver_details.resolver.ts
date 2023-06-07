import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DriverDetailsService } from './driver_details.service';
import { DriverDetail } from '../../db/entities/driver_detail.entity';
import { CreateDriverDetailInput } from './dto/create-driver_detail.input';
import { UpdateDriverDetailInput } from './dto/update-driver_detail.input';

@Resolver(() => DriverDetail)
export class DriverDetailsResolver {
  constructor(private readonly driverDetailsService: DriverDetailsService) {}

  @Mutation(() => DriverDetail)
  createDriverDetail(@Args('createDriverDetailInput') createDriverDetailInput: CreateDriverDetailInput) {
    return this.driverDetailsService.create(createDriverDetailInput);
  }

  @Query(() => [DriverDetail], { name: 'driverDetails' })
  findAll() {
    return this.driverDetailsService.findAll();
  }

  @Query(() => DriverDetail, { name: 'driverDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.driverDetailsService.findOne(id);
  }

  @Mutation(() => DriverDetail)
  updateDriverDetail(@Args('updateDriverDetailInput') updateDriverDetailInput: UpdateDriverDetailInput) {
    return this.driverDetailsService.update(updateDriverDetailInput.id, updateDriverDetailInput);
  }

  @Mutation(() => DriverDetail)
  removeDriverDetail(@Args('id', { type: () => Int }) id: number) {
    return this.driverDetailsService.remove(id);
  }
}
