import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PonyModel } from '../../types/ponyModel';
import { CommonModule } from '@angular/common';
import { HTTP_PoniesService } from '../../services/HTTP-ponies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'eva-pony',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.css'
})
export class PonyComponent {
  pony: PonyModel | undefined;
  running: boolean = true;

  constructor(
    ponyService: HTTP_PoniesService,
    route: ActivatedRoute,
  ) {
    const id = route.snapshot.paramMap.get('ponyId')!;
    ponyService.getPonyId(id).subscribe(pony => this.pony = pony[0])
  }

}