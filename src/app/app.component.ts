import { Component } from '@angular/core';
import { TestComponent } from "./components/test/test.component";
import { PoniesComponent } from "./components/ponies/ponies.component";

@Component({
  selector: 'nx-root',
  standalone: true,
  imports: [TestComponent, PoniesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ponyracer';
}
