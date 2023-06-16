import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DriverDetailsService } from './driver_details.service';
import { DriverDetail } from '../../db/entities/driver_detail.entity';
import { CreateDriverDetailInput } from './dto/create-driver_detail.input';
import { UploadedFile, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guard/index';
import { getUser } from 'src/decorator';


@Resolver(() => DriverDetail)
export class DriverDetailsResolver {
  constructor(private readonly driverDetailsService: DriverDetailsService,
) {}


  @Mutation(() => String)
  @UseGuards(AuthGuard)
  async createDriverDetail(
    @Args('createDriverDetailInput') createDriverDetailInput: CreateDriverDetailInput,
    @getUser("userId") sub : number,
    @UploadedFile() file: Express.Multer.File
    ){{

      return await this.driverDetailsService.create(createDriverDetailInput,sub,file)
 
  }

}

  @Query(() => DriverDetail, { name: 'driverDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.driverDetailsService.findOne(id);
  }


}
