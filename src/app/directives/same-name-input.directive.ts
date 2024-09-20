import { Directive } from '@angular/core';

@Directive({
  selector: '[evaSameNameInput]',
  standalone: true,
  inputs: ['logText'],
})
export class SameNameInputDirective {

  constructor() { }

  set logText(value: string) {
    console.log("FROM DIRECTIVE SAME_NAME_INPUT", value);
  }

}
