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

    // const user = this.carReposity.findOne()

    // if(user){


    // }else{

    // }

    const info = this.carReposity
    // console.log(user)

    return info
    

  }

  findAll() {
    return `This action returns all carDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carDetail`;
  }

  update(id: number, updateCarDetailInput: UpdateCarDetailInput) {
    return `This action updates a #${id} carDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} carDetail`;
  }
}
