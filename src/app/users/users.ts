import { Component, OnInit, Input,
  OnChanges,
  SimpleChanges } from '@angular/core';
import { UsersApi } from './users-api';
import { CommonModule } from '@angular/common';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Highlight } from '../shared/highlight';
import { NameFormatTypePipe } from '../shared/name-format-type-pipe';

// Users component: fetches users, shows list, and manages dynamic user form rows.
@Component({
  imports: [CommonModule, ReactiveFormsModule,Highlight,NameFormatTypePipe],
  selector: 'app-users',
  standalone:true,
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class Users implements OnInit{
  
  // @Input(): parent can pass selectedDate into this component whenever needed.
  @Input() selectedDate = '';

  // Observable holds the API data so we can bind it in the template with async pipe.
  userList$!: Observable<User[]>;

  constructor(
  private usersApi: UsersApi,
  private router: Router,
  private route: ActivatedRoute
) {}

  // Navigation flow: route to the selected user detail screen.
  viewUser(id: number) {
  this.router.navigate(['/users', id]);
}

  // Angular lifecycle: call API when component loads.
  ngOnInit() {
    //this.userList$ = this.usersApi.getUserList();
    this.userList$ = this.usersApi.getUserList();

  const status = this.route.snapshot.queryParamMap.get('status');

  console.log('Status:', status);
  }

  // ngOnChanges: runs when input-bound data changes.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges:', changes);
  }

  // Dynamic form for multiple user rows.
  usersForm = new FormGroup({
  department: new FormControl(''),
  users: new FormArray([
    new FormGroup({
      name: new FormControl(''),
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      website: new FormControl('')
    })
  ])
});

  // Add row to the dynamic FormArray.
  addUser() {
  const userGroup = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl('')
  });

  this.usersForm.controls.users.push(userGroup);
}

  // Remove selected row from FormArray.
  removeUser(index: number) {
  this.usersForm.controls.users.removeAt(index);
}
}
