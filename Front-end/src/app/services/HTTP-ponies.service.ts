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
      .get<Array<PonyModel>>("http://localhost:3000/ponies");
    this.logingService.log("PONIES FROM SERVER");
    return data
  }

  getPonyId(id: string): Observable<any> {
    let pony: Observable<any> = this.http
      .get<any>(`http://localhost:3000/ponies?id=${id}`);
    this.logingService.log("PONY FROM SERVER");
    return pony
  }
}
