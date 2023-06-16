import { Dependencies, Global, Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CarDetailsModule } from './car_details/car_details.module';
import { DriverDetailsModule } from './driver_details/driver_details.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import {dataSourceOptions} from 'db/data-source';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';


@Global()
@Module({
  imports: [TypeOrmModule.forRoot(
    dataSourceOptions
  ),
  MulterModule.register({
    dest: './../src/upload',
    storage : './../src/upload'
  }),
  GraphQLModule.forRoot({
    driver : ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/graphql_schema.gql'),
  }),
  ConfigModule.forRoot({
    isGlobal : true
  })
  ,
    AuthModule, DriverDetailsModule, CarDetailsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

