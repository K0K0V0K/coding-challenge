import { Controller, Inject } from '@nestjs/common';
import { ClientProxy, EventPattern } from '@nestjs/microservices';
import { WorkerService } from './worker.service';

@Controller()
export class WorkerController {
  constructor(
    @Inject('DATA_STREAMS') private client: ClientProxy,
    private readonly workerService: WorkerService
  ) {}

  
  @EventPattern('transfer_temperature')
  transferTemperature() {
    console.log("receive | transfer_temperature")
    this.workerService.getTemperature().then(temperature => {
      console.log("send | store_temperature: " + JSON.stringify(temperature))
      this.client.emit('store_temperature', new Object())
    })
  }
}
