import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HTTPUserService {

  constructor(
    private logingService: LoggingService,
    private http: HttpClient,
  ) { }

  isUserAvailabel(name: string): Observable<any> {
    let userName: Observable<any> = this.http
      .get<any>(`http://localhost:3000/users?name=${name}`);
    this.logingService.log("USER FROM SERVER");              
    return userName;
  }
}