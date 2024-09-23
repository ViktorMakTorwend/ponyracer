import { Component } from '@angular/core';
import { PonyComponent } from "../pony/pony.component";
import { PonyModel } from '../../types/ponModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eva-ponies',
  standalone: true,
  imports: [
    PonyComponent, 
    CommonModule,
  ],
  templateUrl: './ponies.component.html',
  styleUrl: './ponies.component.css'
})
export class PoniesComponent {
  ponies: Array<PonyModel> = [
    { id: 1, 
      name: 'Rainbow Dash',
      birtday: "2022-03-25",
      numberInCatalog: 58624,
      winPer: 0.8,
      cost: 2547 },
    { id: 2, 
      name: 'Pinkie Pie',
      birtday: "2021-04-25",
      numberInCatalog: 95127,
      winPer: 0.75,
      cost: 3574 },
    { id: 3, 
      name: 'London Vi',
      birtday: "2020-08-15",
      numberInCatalog: 12475,
      winPer: 0.3,
      cost: 6524}
    ];
    size = 3;

    betOnPony(pony: PonyModel): void {
      console.log("THE BET IS ON PONY: ", pony.name)
    }

}
