import { Injectable } from '@angular/core';
import { PonyModel } from '../types/ponyModel';
import { ponies } from '../../../data/ponies';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class GetPoniesService {
  
  constructor(private logingService: LoggingService) { }

  getPonies(): Array<PonyModel> {
    let data: Array<PonyModel> = ponies;
    this.logingService.log("PONIES DATA FROM SERVER");
    return data;
  }
}
