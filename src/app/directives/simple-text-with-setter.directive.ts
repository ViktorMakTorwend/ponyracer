import { Directive } from '@angular/core';

@Directive({
  selector: '[evaSimpleTextWithSetter]',
  inputs: ['text: logText'],
  standalone: true
})
export class SimpleTextWithSetterDirective {

  constructor() { }

  set text(value: string) {
    console.log("FROM DIRECTIVE", value);
  }

}
