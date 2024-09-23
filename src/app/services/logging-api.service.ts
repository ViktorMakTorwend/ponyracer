import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingAPIService {

  constructor() { }

  log(message: string): void {
    console.log("PRODUCTION +  ", message);
  }

}


