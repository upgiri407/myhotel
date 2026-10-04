import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from '../nav/nav';

// Layout component wraps the shared navigation and router outlet for child pages.
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [Nav, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {}