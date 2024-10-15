import { Component, OnInit } from '@angular/core';
import { PonyModel } from '../../types/ponyModel';
import { Observable } from 'rxjs';
import { HTTP_PoniesService } from '../../services/HTTP-ponies.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'eva-ponies-obsrvbl',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule],
  templateUrl: './ponies-obsrvbl.component.html',
  styleUrl: './ponies-obsrvbl.component.css'
})
export class PoniesObsrvblComponent implements OnInit{
  ponies!: Observable<Array<PonyModel>>;

  constructor(private ponyService: HTTP_PoniesService) {}

  ngOnInit(): void {
    this.ponies = this.ponyService.getPonies();
  }
  
}
