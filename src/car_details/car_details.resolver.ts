import { Resolver, Query, Mutation, Args, Int, Context} from '@nestjs/graphql';
import {UploadedFile, UseInterceptors} from '@nestjs/common'
import { CarDetailsService } from './car_details.service';
import { CarDetail } from '../../db/entities/car_detail.entity';
import { CreateCarDetailInput } from './dto/create-car_detail.input';
import { CloudinaryService } from 'nestjs-cloudinary';
import { InjectRepository } from '@nestjs/typeorm'
import { Request } from 'express';
import { Auth } from 'db/entities/auth.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs';
import { join } from 'path';
import { HttpException, HttpStatus } from '@nestjs/common'; 
import { FileInterceptor } from '@nestjs/platform-express';


@Resolver(() => CarDetail)
export class CarDetailsResolver {
  constructor(
    @InjectRepository(CarDetail) private readonly carReposity : Repository<CarDetail>,
    private readonly carDetailsService: CarDetailsService,   
    @InjectRepository(Auth) private readonly authReposity : Repository<Auth>
    ) {}

  @Mutation(() => CarDetail)
  @UseInterceptors(FileInterceptor('image_linkk'))
   async createCarDetail( @Context('req') req : Request,
   @UploadedFile() file: Express.Multer.File,
   @Args('createInput') input : CreateCarDetailInput) : Promise<CarDetail>{

    const uniqueFilename = `${Date.now()}-${file.originalname}`;
    fs.writeFileSync(`/../../src/upload/${uniqueFilename}`, file.buffer);

    console.log(uniqueFilename)

    const auth = new CarDetail()

    auth.image_link =  uniqueFilename
    let user_id= await this.authReposity.findOne({where : { id : input.userId}})
    auth.car_owner = user_id

    return this.carReposity.save(auth)

  }

}
