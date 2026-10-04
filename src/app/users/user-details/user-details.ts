// User details page: reads the route parameter and displays the selected user.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails implements OnInit {

  constructor(private route: ActivatedRoute) {}

  // Angular lifecycle: read the dynamic user id from URL at component load.
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('User ID:', id);
  }
}