import { Injectable } from '@angular/core';
import { RaceModel } from '../types/raceModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaceDIService {
  constructor() { }

   race1: RaceModel = {name: "london"};
   race2: RaceModel = {name: "Lyon"};
   raceList: Array<RaceModel> = [this.race1, this.race2];

  list(): Array<RaceModel> {
    return this.raceList;
  }

  listObservable(): Observable<Array<RaceModel>> {
    return new Observable(observer => observer.next(this.raceList));
  }
}
