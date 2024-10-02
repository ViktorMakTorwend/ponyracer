import { Injectable } from '@angular/core';
import { RaceModel } from '../types/raceModel';

@Injectable({
  providedIn: 'root'
})
export class LocalStarageService {
  constructor() { }

  get(name: string):  Array<RaceModel> {
    return [];
  }
}
