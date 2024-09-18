import { Component } from '@angular/core';
import { RaceComponent } from './components/race/race.component';

@Component({
  selector: 'eva-root',
  standalone: true,
  imports: [RaceComponent],
  templateUrl: 'app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user: {name: string} | undefined;
}
