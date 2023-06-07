import { Injectable } from '@nestjs/common';
import { CreateDriverDetailInput } from './dto/create-driver_detail.input';
import { UpdateDriverDetailInput } from './dto/update-driver_detail.input';

@Injectable()
export class DriverDetailsService {
  create(createDriverDetailInput: CreateDriverDetailInput) {
    return 'This action adds a new driverDetail';
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
