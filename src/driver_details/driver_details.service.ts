import { HttpException, HttpStatus, Injectable, UseGuards} from '@nestjs/common';
import { CreateDriverDetailInput } from './dto/create-driver_detail.input';
import { Repository } from 'typeorm'
import { DriverDetail } from 'db/entities/driver_detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from 'src/guard';
import { createWriteStream } from 'fs';
import { CloudinaryService } from 'nestjs-cloudinary';
import { UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';
import { Auth } from 'db/entities/auth.entity'

@Injectable()
export class DriverDetailsService {
  constructor(
    @InjectRepository(DriverDetail) private readonly driverReposity : Repository<DriverDetail>,
  @InjectRepository(Auth) private readonly authReposity : Repository<Auth>
  
  ){}


  @UseInterceptors(FileInterceptor('image'))
  async create(
    createDriverDetailInput: CreateDriverDetailInput,
     userId : number,
     file : Express.Multer.File
     ) {

    const uniqueFilename = `${Date.now()}-${file.originalname}`;

    fs.writeFileSync(`./../../src/upload/${uniqueFilename}`, file.buffer);

    const auth = new DriverDetail()

    auth.image_link =  uniqueFilename


    let user = await this.authReposity.findOne({where : { id : userId}})

    auth.user_id = user

    await this.authReposity.save(auth)

    return "upload successful"
    
  }

  findOne(id: number) {
    return `This action returns a #${id} driverDetail`;
  }


}
