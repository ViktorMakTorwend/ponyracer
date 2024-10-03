import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PonyModel } from '../../types/ponyModel';
import { CommonModule } from '@angular/common';

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
  @Input({required: true}) pony!: PonyModel;
  @Input() running = true;
  @Output() readonly ponySelected = new EventEmitter<PonyModel>();

  selectPony(): void {
    this.ponySelected.emit(this.pony);
  }

}
