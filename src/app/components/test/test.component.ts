import { Component } from '@angular/core';
import { DoNothingDirective } from '../../directives/do-nothing.directive';
import { SimpleTextDirective } from '../../directives/simple-text.directive';
import { SimpleTextWithSetterDirective } from '../../directives/simple-text-with-setter.directive';
import { SameNameInputDirective } from '../../directives/same-name-input.directive';
import { SameNameInputDecoratorOnSetterDirective } from '../../directives/same-name-input-decorator-on-setter.directive';
import { OnInitDirective } from '../../directives/on-init.directive';

@Component({
  selector: 'eva-test',
  standalone: true,
  imports: [
    DoNothingDirective, 
    SimpleTextDirective,
    SimpleTextWithSetterDirective,
    SameNameInputDirective,
    SameNameInputDecoratorOnSetterDirective,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  value = ""
  constructor() {
    this.value = "FROM COMPONENT"
  }

}
