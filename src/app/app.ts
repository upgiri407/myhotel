import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Root app component: acts as the main shell for the Angular application.
@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('crackIt');
}
