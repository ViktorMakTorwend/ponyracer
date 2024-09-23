import { Injectable } from '@angular/core';
import { filter, from, map, range } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RxJsService {

  constructor() { }

  observableExample() {
     from([1, 2, 3, 4, 5])
      .pipe(
        map(x => x * 2),
        filter(x => x > 5)
      ).subscribe(x => console.log(x));
  }

  observableSubscribe() {
    range(1, 5)
      .pipe(
        map(x => x * 2),
        filter(x => x > 5)
      )
      .subscribe({
        next: x => console.log(x),
        error: error => console.log(error),
        complete: () => console.log("done")
      })
  }
}
