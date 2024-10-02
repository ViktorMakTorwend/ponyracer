import { Injectable } from '@angular/core';
import { Pony } from '../components/pony/pony-class.component.spec';
import { RaceModel } from '../types/raceModel';

@Injectable({
  providedIn: 'root'
})
export class RaceService {
  constructor(private ponies: Array<Pony>) { }

  start(): Array<Pony> {
    return (
      this.ponies.filter(pony => pony.run(pony.speed))
    )
  }

}
