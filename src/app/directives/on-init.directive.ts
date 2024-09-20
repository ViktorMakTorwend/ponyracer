import { Directive, Input, OnInit } from '@angular/core';
import { PonyModel } from '../types/ponModel';

@Directive({
  selector: '[evaOnInit]',
  standalone: true
})
export class OnInitDirective  implements OnInit {
  @Input({required: true}) pony!: PonyModel;

  ngOnInit(): void {
    console.log(`inputs are ${JSON.stringify(this.pony)}`)
  }

  constructor() { }

}
