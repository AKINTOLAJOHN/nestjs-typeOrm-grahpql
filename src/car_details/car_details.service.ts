import { Injectable } from '@nestjs/common';
import { CreateCarDetailInput } from './dto/create-car_detail.input';
import { UpdateCarDetailInput } from './dto/update-car_detail.input';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CarDetail } from 'db/entities/car_detail.entity';

@Injectable()
export class CarDetailsService {
  constructor(@InjectRepository(CarDetail) private readonly carReposity : Repository<CarDetail>){}
  create(createCarDetailInput: CreateCarDetailInput) {

    this.carReposity.save(createCarDetailInput)
    

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
