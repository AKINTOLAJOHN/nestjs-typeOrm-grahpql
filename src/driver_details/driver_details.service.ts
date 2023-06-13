import { HttpException, HttpStatus, Injectable, UseGuards} from '@nestjs/common';
import { CreateDriverDetailInput } from './dto/create-driver_detail.input';
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
    
  }

  findOne(id: number) {
    return `This action returns a #${id} driverDetail`;
  }


}
