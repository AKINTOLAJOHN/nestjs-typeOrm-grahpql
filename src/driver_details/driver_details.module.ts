import { Module } from '@nestjs/common';
import { DriverDetailsService } from './driver_details.service';
import { DriverDetailsResolver } from './driver_details.resolver';

@Module({
  providers: [DriverDetailsResolver, DriverDetailsService]
})
export class DriverDetailsModule {}
