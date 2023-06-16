import { Module } from '@nestjs/common';
import { CarDetailsService } from './car_details.service';
import { CarDetailsResolver } from './car_details.resolver';
import { Auth } from 'db/entities/auth.entity';
import { CarDetail } from 'db/entities/car_detail.entity';
import { DriverDetail } from 'db/entities/driver_detail.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports : [TypeOrmModule.forFeature([Auth,CarDetail,DriverDetail])],
  providers: [AuthService,CarDetailsResolver, CarDetailsService,]
})
export class CarDetailsModule {}
