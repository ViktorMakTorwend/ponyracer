import { Injectable } from '@angular/core';
import { PonyModel } from '../types/ponyModel';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { concatMap, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTP_PoniesService {

  constructor(
    private logingService: LoggingService,
    private http: HttpClient,
  ) { }

  getPonies(): Observable<Array<PonyModel>> {
    let ponies: Observable<Array<PonyModel>> = this.http
      .get<Array<PonyModel>>("http://localhost:3000/ponies");
    this.logingService.log("PONIES FROM SERVER");
    return ponies
  }

  getPonyId(id: string): Observable<any> {
    let pony: Observable<any> = this.http
      .get<any>(`http://localhost:3000/ponies?id=${id}`)
      .pipe(map(arr => arr[0]))
    this.logingService.log("PONY FROM SERVER");
    return pony
  }

  searchPony(ponyName: string) {
    let ponies: Observable<any> = this.http
      .get<any>(`http://localhost:3000/ponies?name_like=${ponyName}`);
    this.logingService.log("PONY FROM SERVER");
    return ponies
  }
}
