import { Component } from '@angular/core';
import { PonyModel } from '../../types/ponyModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'eva-race',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './race.component.html',
  styleUrl: './race.component.css'
})
export class RaceComponent {
  ponies: Array<PonyModel> = [];

  refreshPonyList(): void {
    this.ponies = [
      {
        name: "London",
        age: 5,
        adult: true,
        pic: "https://t4.ftcdn.net/jpg/01/35/35/41/240_F_135354157_HvBUoZmDq0rfUiHUtCGefp4D9vw8CgaJ.jpg",
        showDetails: false,
        color: "black",
      },
      {
        name: "York",
        age: 3,
        adult: false,
        pic: "https://t3.ftcdn.net/jpg/00/86/25/46/240_F_86254655_i2ScUs4Dc63UTMDwucyArgnqyVkjTNS2.jpg",
        showDetails: false,
        color: "black",
      },
      {
        name: "Manhetan",
        age: 6,
        adult: true,
        pic: "https://t4.ftcdn.net/jpg/02/32/52/31/240_F_232523118_2P9NnRqyUYFjgvaydyQtMUjIZBaYawKT.jpg",
        showDetails: false,
        color: "black",
      }
    ]
  }

  showPonyDetails(name: string): void {
   let foundPony = this.ponies.filter((pony) => name === pony.name);
   let pony: PonyModel = {
    name: foundPony[0].name,
    age: foundPony[0].age,
    adult: foundPony[0].adult,
    showDetails: !foundPony[0].showDetails,
    pic: foundPony[0].pic,
    color: foundPony[0].color,
   }
   pony.showDetails ? pony.color = "green" : pony.color = "black";
   let index = this.ponies.findIndex(pony => pony.name === name);
   this.ponies[index] = pony;
  }

}
