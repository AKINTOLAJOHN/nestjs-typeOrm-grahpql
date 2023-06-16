import { Injectable, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { CreateCarDetailInput } from './dto/create-car_detail.input';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CarDetail } from 'db/entities/car_detail.entity';
import { Auth } from 'db/entities/auth.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';

@Injectable()
export class CarDetailsService {
  constructor(
    @InjectRepository(CarDetail) private readonly carReposity : Repository<CarDetail>,
  @InjectRepository(Auth) private readonly authReposity : Repository<Auth>
  ){}

  
  @UseInterceptors(FileInterceptor('image'))
  async create(createDriverDetailInput : CreateCarDetailInput,username : string,@UploadedFile() file: Express.Multer.File){


    let item = new CarDetail()

    let jam = await this.authReposity.findOne({where : { email : username}})

    const uniqueFilename = `${Date.now()}-${file.originalname}`;

    fs.writeFileSync(`/../../src/upload/${uniqueFilename}`, file.buffer);
    
    item.image_link = uniqueFilename
    
    item.car_owner = jam

   await this.carReposity.save(item)

   return 'upload successful'   

  }

}
