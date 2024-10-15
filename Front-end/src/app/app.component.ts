import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PoniesObsrvblComponent } from './components/ponies-obsrvbl/ponies-obsrvbl.component';

@Component({
  selector: 'nx-root',
  standalone: true,
  imports: [
    PoniesObsrvblComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello, ponyracer';
}
