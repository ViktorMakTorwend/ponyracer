import { Component, OnInit } from '@angular/core';
import { PonyComponent } from "../pony/pony.component";
import { PonyModel } from '../../types/ponyModel';
import { CommonModule } from '@angular/common';
import { GetPoniesService } from '../../services/get-ponies.service';
import { LoggingService } from '../../services/logging.service';
import { LoggingAPIService } from '../../services/logging-api.service';

@Component({
  selector: 'eva-ponies',
  //providers: [{provide: LoggingService, useClass: LoggingAPIService}],
  providers: [{provide: LoggingService, useClass: LoggingService}],
  standalone: true,
  imports: [
    PonyComponent,
    CommonModule,
  ],
  templateUrl: './ponies.component.html',
  styleUrl: './ponies.component.css'
})
export class PoniesComponent  {
  ponies: Array<PonyModel> = [];
  size = 3;

  constructor(private getPoniesService: GetPoniesService) {
    this.ponies = this.getPoniesService.getPonies();
  }

  betOnPony(pony: PonyModel): void {
    console.log("THE BET IS ON PONY: ", pony.name)
  }

}
