import { Injectable, UseGuards } from '@nestjs/common';
import { CreateCarDetailInput } from './dto/create-car_detail.input';
import { UpdateCarDetailInput } from './dto/update-car_detail.input';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CarDetail } from 'db/entities/car_detail.entity';
import { AuthGuard } from 'src/guard';
import { getUser } from 'src/decorator';

@Injectable()
export class CarDetailsService {
  constructor(@InjectRepository(CarDetail) private readonly carReposity : Repository<CarDetail>){}

  @UseGuards(AuthGuard)
  create(createCarDetailInput: CreateCarDetailInput) {

    const { image_linkk } = createCarDetailInput

    
    

  }

}
