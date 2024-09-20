import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PonyModel } from '../types/ponModel';

@Directive({
  selector: '[evaOnChange]',
  standalone: true
})
export class OnChangeDirective implements OnChanges {
  @Input({required: true}) pony!: PonyModel;

  ngOnChanges(changes: SimpleChanges): void {
    const ponyValue = changes['pony'];
    console.log(`changes from ${ponyValue.previousValue} to ${ponyValue.currentValue}`);
    console.log(`is it the first change? ${ponyValue.isFirstChange()}`);
  }

  constructor() { }

}
