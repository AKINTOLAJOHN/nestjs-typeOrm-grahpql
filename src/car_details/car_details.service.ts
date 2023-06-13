import { Injectable, UseGuards } from '@nestjs/common';
import { CreateCarDetailInput } from './dto/create-car_detail.input';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CarDetail } from 'db/entities/car_detail.entity';
import { AuthGuard } from 'src/guard';
import { getUser } from 'src/decorator';
import { AuthService } from 'src/auth/auth.service';
import { Auth } from 'db/entities/auth.entity';

@Injectable()
export class CarDetailsService {
  constructor(@InjectRepository(CarDetail) private readonly carReposity : Repository<CarDetail>,
  @InjectRepository(Auth) private readonly authReposity : Repository<Auth>
  ){}

  @UseGuards(AuthGuard)
  async create(result,file,createDriverDetailInput){

   const {image_link, userId} = createDriverDetailInput

    let item = new CarDetail()

    let jam = await this.authReposity.findOne({where : { id : createDriverDetailInput}})
    
    // item.image_link = image_linkk
    item.car_owner = jam

   const data = await this.carReposity.save(item)

   return data   

  }

}
