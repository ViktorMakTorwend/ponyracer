import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PonyModel } from '../../types/ponModel';
import { OnInitDirective } from '../../directives/on-init.directive';
import { OnChangeDirective } from '../../directives/on-change.directive';
import { OnDestroyDirective } from '../../directives/on-destroy.directive';

@Component({
  selector: 'eva-pony',
  standalone: true,
  imports: [
    OnInitDirective, 
    OnChangeDirective,
    OnDestroyDirective,
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
