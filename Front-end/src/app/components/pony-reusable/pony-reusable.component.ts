import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PonyModel } from '../../types/ponyModel';
import { HTTP_PoniesService } from '../../services/HTTP-ponies.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'eva-pony-reusable',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pony-reusable.component.html',
  styleUrl: './pony-reusable.component.css'
})
export class PonyReusableComponent {
  pony: PonyModel | undefined;
  running: boolean = true;

  constructor(
    ponyService: HTTP_PoniesService,
    route: ActivatedRoute,
  ) {
      route.paramMap.subscribe((params: ParamMap) => {
        const id = params.get('ponyId')!;
        ponyService.getPonyId(id).subscribe(pony => this.pony = pony[0])
      })
  }
}
