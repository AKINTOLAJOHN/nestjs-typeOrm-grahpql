import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser'
import "reflect-metadata"
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
import * as cookieParser from 'cookie-parser'


async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors : true});
  app.use(graphqlUploadExpress({ maxFileSize: 1000000, maxFiles: 10 }));
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,

  }))
  app.enableCors();
  app.use(cookieParser());
  app.use(bodyParser.json())
  await app.listen(3000);
}
bootstrap();
