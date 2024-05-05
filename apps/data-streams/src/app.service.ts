import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {

  temperatures: string[];

  storeTemperature(temperature: string) {
    this.temperatures.push(temperature)
  }
}
