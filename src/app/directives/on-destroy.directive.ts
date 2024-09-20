import { Directive, OnDestroy } from '@angular/core';

@Directive({
  selector: '[evaOnDestroy]',
  standalone: true
})
export class OnDestroyDirective implements OnDestroy {
  sayHello: number;

  constructor() { 
    this.sayHello = window.setInterval(() => console.log('hello'), 1000)
  }

  ngOnDestroy(): void {
    window.clearInterval(this.sayHello);
  }

}
