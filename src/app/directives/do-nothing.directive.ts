import { Directive } from '@angular/core';

@Directive({
  selector: '[evaDoNothing]',
  standalone: true
})
export class DoNothingDirective {

  constructor() {
    console.log("Do nothing derective")
   }

}
