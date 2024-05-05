import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('WORKER') private client: ClientProxy,
    private readonly appService: AppService,
  ) {}

  @Get("/start")
  startPoll() {
    console.log("send | transfer_temperature")
    this.client.emit('transfer_temperature', new Object());
    return "OK"
  }

  @Get("/list")
  list() {
    return this.appService.temperatures;
  }

  //TODO: store_temperature not getting triggered
  @EventPattern('store_temperature')
  storeTemperature(temperature: string) {
    console.log("receive | store_temperature: " + temperature)
    this.appService.storeTemperature(temperature);
  }
}
