import { Component, OnInit } from '@angular/core';
import { PonyComponent } from "../pony/pony.component";
import { PonyModel } from '../../types/ponyModel';
import { CommonModule } from '@angular/common';
import { HTTP_PoniesService } from '../../services/HTTP-ponies.service';
import { LoggingService } from '../../services/logging.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'eva-ponies',
  providers: [{provide: LoggingService, useClass: LoggingService}],
  standalone: true,
  imports: [
    PonyComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './ponies.component.html',
  styleUrl: './ponies.component.css'
})
export class PoniesComponent  {
  ponies: Array<PonyModel> = [];
  size = 3;

  constructor(
    private getPoniesService: HTTP_PoniesService,
  ) {
    this.getPoniesService.getPonies().subscribe(data => this.ponies = data);
  }

  betOnPony(pony: PonyModel): void {
    console.log("THE BET IS ON PONY: ", pony.name)
  }

}
