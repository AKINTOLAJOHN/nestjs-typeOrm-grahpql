import { Module, Global } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { TypeOrmModule} from '@nestjs/typeorm'
import { Auth } from '../../db/entities/auth.entity';
import { CarDetail } from 'db/entities/car_detail.entity';
import { DriverDetail } from 'db/entities/driver_detail.entity';
import { dataSourceOptions } from 'db/data-source';

@Global()
@Module({
  imports : [
    TypeOrmModule.forFeature([Auth,CarDetail,DriverDetail]),],
  providers: [AuthService, AuthResolver]
})
export class AuthModule {}
