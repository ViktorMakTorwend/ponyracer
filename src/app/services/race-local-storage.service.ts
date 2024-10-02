import { Injectable } from '@angular/core';
import { LocalStarageService } from './local-starage.service';
import { RaceModel } from '../types/raceModel';

@Injectable({
  providedIn: 'root'
})
export class RaceLocalStorageService {
  constructor(private localStorage: LocalStarageService) { }

  list(): Array<RaceModel> {
   return this.localStorage.get("races");
  }
}
