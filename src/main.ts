import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser'
import "reflect-metadata"
import * as cookieParser from 'cookie-parser'
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';




async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist : true,
    validateCustomDecorators : true

  }))
  app.use(graphqlUploadExpress());
  app.enableCors();
  app.use(cookieParser());
  app.use(bodyParser.json())
  await app.listen(3000);
}
bootstrap();
