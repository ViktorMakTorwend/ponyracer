import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PonyModel } from '../../types/ponyModel';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HTTP_PoniesService } from '../../services/HTTP-ponies.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'eva-pony-obsrvbl',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
  ],
  templateUrl: './pony-obsrvbl.component.html',
  styleUrl: './pony-obsrvbl.component.css'
})
export class PonyObsrvblComponent {
  pony: Observable<PonyModel | undefined>;
  running: boolean = true;

  constructor(
    ponyService: HTTP_PoniesService,
    route: ActivatedRoute,
  ) {
    const id = route.snapshot.paramMap.get('ponyId')!;
    this.pony = ponyService
      .getPonyId(id)
      //.pipe(shareReplay());
  }
}
