import { Component } from '@angular/core';
import { PoniesComponent } from "./components/ponies/ponies.component";

@Component({
  selector: 'nx-root',
  standalone: true,
  imports: [PoniesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ponyracer';
}
