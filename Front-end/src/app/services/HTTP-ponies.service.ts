import { Injectable } from '@angular/core';
import { PonyModel } from '../types/ponyModel';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTP_PoniesService {
  
  constructor(
    private logingService: LoggingService,
    private http: HttpClient,
  ) { }

  getPonies(): Observable<Array<PonyModel>> {
    let data: Observable<Array<PonyModel>> = this.http
      .get<Array<PonyModel>>("http://localhost:3000/ponies")
    this.logingService.log("PONIES DATA FROM SERVER");
    return data
  }
}
