import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PonyModel } from '../../types/ponModel';
import { CommonModule } from '@angular/common';
import { FromNowPipe } from '../../pipes/from-now.pipe';

@Component({
  selector: 'eva-pony',
  standalone: true,
  imports: [
    CommonModule,
    FromNowPipe
  ],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.css'
})
export class PonyComponent {
  @Input({required: true}) pony!: PonyModel;
  @Output() readonly ponySelected = new EventEmitter<PonyModel>();

  selectPony(): void {
    this.ponySelected.emit(this.pony);
  }

}
