import { Component } from '@angular/core';
import { PoniesComponent } from "./components/ponies/ponies.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nx-root',
  standalone: true,
  imports: [
    PoniesComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello, ponyracer';
}
