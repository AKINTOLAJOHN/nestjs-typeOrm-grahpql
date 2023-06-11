import { HttpException, HttpStatus, Injectable, UseGuards} from '@nestjs/common';
import { CreateDriverDetailInput } from './dto/create-driver_detail.input';
import { UpdateDriverDetailInput } from './dto/update-driver_detail.input';
import { Repository } from 'typeorm'
import { DriverDetail } from 'db/entities/driver_detail.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from 'src/guard';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Injectable()
export class DriverDetailsService {
  constructor(@InjectRepository(DriverDetail) private readonly driverReposity : Repository<DriverDetail>){}

  @UseGuards(AuthGuard)
  async create(createDriverDetailInput: CreateDriverDetailInput) {

    const  { image_linkk } = createDriverDetailInput

    // const driver = this.driverReposity.findOne({where : {user_id : 1}})
      const { createReadStream, filename } = await image_linkk;
      return new Promise(async (resolve) => {
      createReadStream()
       .pipe(createWriteStream(join(process.cwd(), `./src/upload/driver_lince/${filename}`)))
       .on('finish', () =>
         resolve({
          image_linkk: filename,
         }),
       )
       .on('error',() => {
           new HttpException('Could not save image', HttpStatus     .BAD_REQUEST);
        });
      });
    
    
  }

  findAll() {
    return `This action returns all driverDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverDetail`;
  }

  update(id: number, updateDriverDetailInput: UpdateDriverDetailInput) {
    return `This action updates a #${id} driverDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverDetail`;
  }
}
