import { Directive } from '@angular/core';

@Directive({
  selector: '[evaSimpleText]',
  inputs:['text:logText'],
  standalone: true
})
export class SimpleTextDirective {

  constructor() { }

}
