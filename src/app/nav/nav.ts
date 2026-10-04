import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

// Navigation bar component for app-level route switching.
@Component({
   imports: [RouterLink],
  selector: 'app-nav',
  styleUrl: './nav.css',
  templateUrl: './nav.html',
})
export class Nav {}
