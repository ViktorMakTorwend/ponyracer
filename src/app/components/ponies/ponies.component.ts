import { Component } from '@angular/core';
import { PonyComponent } from "../pony/pony.component";
import { PonyModel } from '../../types/ponModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eva-ponies',
  standalone: true,
  imports: [PonyComponent, CommonModule],
  templateUrl: './ponies.component.html',
  styleUrl: './ponies.component.css'
})
export class PoniesComponent {
  ponies: Array<PonyModel> = [
    { id: 1, name: 'Rainbow Dash' },
    { id: 2, name: 'Pinkie Pie' },
    { id: 3, name: 'London Vi'}
    ];

    betOnPony(pony: PonyModel): void {
      console.log("THE BET IS ON PONY: ", pony.name)
    }
}
