import { MicroserviceOptions } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { WorkerModule } from './worker.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WorkerModule,
    {
      options: {
        port: 5001,
      },
      transport: Transport.TCP,
    },
  );
  app.listen();
}
bootstrap();
