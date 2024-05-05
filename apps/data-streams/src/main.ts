import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';

const initMicroservice = async (app: INestApplication) => {
  app.connectMicroservice({
    transport: Transport.TCP,
  });
  await app.startAllMicroservices();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await initMicroservice(app);
  await app.listen(5000);
  console.log("app listening on port 5000")
}
bootstrap();
