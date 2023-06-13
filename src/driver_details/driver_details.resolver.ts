import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DriverDetailsService } from './driver_details.service';
import { DriverDetail } from '../../db/entities/driver_detail.entity';
import { CreateDriverDetailInput } from './dto/create-driver_detail.input';
import { CloudinaryService } from 'nestjs-cloudinary';
import { UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { Auth } from 'db/entities/auth.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Resolver(() => DriverDetail)
export class DriverDetailsResolver {
  constructor(private readonly driverDetailsService: DriverDetailsService,
    @InjectRepository(Auth) private readonly authReposity : Repository<Auth>,
    @InjectRepository(DriverDetail) private readonly driverReposity : Repository<DriverDetail>) {}

  @Mutation(() => DriverDetail)
  @UseInterceptors(FileInterceptor('image_linkk'))
  async createDriverDetail(@Args('createDriverDetailInput') createDriverDetailInput: CreateDriverDetailInput,@UploadedFile() file: Express.Multer.File) : Promise<DriverDetail>{{
    const uniqueFilename = `${Date.now()}-${file.originalname}`;
    fs.writeFileSync(`./../../src/upload/${uniqueFilename}`, file.buffer);

    const auth = new DriverDetail()
    auth.image_link =  uniqueFilename


    let user_id= await this.authReposity.findOne({where : { id : createDriverDetailInput.userId}})
    auth.user_id = user_id

    return this.driverReposity.save(auth)

 
  }

}

  @Query(() => DriverDetail, { name: 'driverDetail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.driverDetailsService.findOne(id);
  }


}
