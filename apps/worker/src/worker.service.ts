import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs';
import axios from 'axios';

@Injectable()
export class WorkerService {

  constructor() {}

  // Non-Commercial Use:  Less than 10'000 API calls per day, 5'000 per hour and 600 per minute.
  // Example:
  // curl https://api.open-meteo.com/v1/forecast?latitude=46.9936&longitude=17.9574&current=temperature_2m | jq
  // {
  //   "latitude": 47.0,
  //   "longitude": 17.96,
  //   "generationtime_ms": 0.019073486328125,
  //   "utc_offset_seconds": 0,
  //   "timezone": "GMT",
  //   "timezone_abbreviation": "GMT",
  //   "elevation": 144.0,
  //   "current_units": {
  //     "time": "iso8601",
  //     "interval": "seconds",
  //     "temperature_2m": "°C"
  //   },
  //   "current": {
  //     "time": "2024-05-04T14:30",
  //     "interval": 900,
  //     "temperature_2m": 22.9
  //   }
  // }

  async getTemperature() {
    return (await axios.get("https://api.open-meteo.com/v1/forecast?latitude=46.9936&longitude=17.9574&current=temperature_2m")).data;
  }
}
