import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[evaSameNameInputDecoratorOnSetter]',
  standalone: true
})
export class SameNameInputDecoratorOnSetterDirective {

  constructor() { }

  @Input()
  set logText(value: string) {
    console.log("FROM INPUT: ", value);
  }
}
