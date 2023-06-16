import { Resolver, Query, Mutation, Args, Int, Context} from '@nestjs/graphql';
import {Req, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common'
import { CarDetailsService } from './car_details.service';
import { CarDetail } from '../../db/entities/car_detail.entity';
import { CreateCarDetailInput } from './dto/create-car_detail.input';
import { getUser } from 'src/decorator';   
import { AuthGuard } from 'src/guard/index';
import { FileInterceptor } from '@nestjs/platform-express';


@Resolver(() => CarDetail)
export class CarDetailsResolver {
  constructor(
    private readonly carDetailsService: CarDetailsService,   
    ) {}

  @Mutation(() => String)
  @UseGuards(AuthGuard)
   async createCarDetail( 
   @Args('createInput') input : CreateCarDetailInput,
   @getUser("username") username : string,
   @UploadedFile() file: Express.Multer.File
    ){    

    const info =  await this.carDetailsService.create(input,username,file)

    return info

  }

}
