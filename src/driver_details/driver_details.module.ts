import { Module } from '@nestjs/common';
import { DriverDetailsService } from './driver_details.service';
import { DriverDetailsResolver } from './driver_details.resolver';
import { AuthService } from 'src/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Auth } from 'db/entities/auth.entity';
import { CarDetail } from 'db/entities/car_detail.entity';
import { DriverDetail } from 'db/entities/driver_detail.entity';


@Module({
  imports : [TypeOrmModule.forFeature([Auth,CarDetail,DriverDetail])],
  providers: [AuthService,DriverDetailsResolver, DriverDetailsService]
})
export class DriverDetailsModule {}
