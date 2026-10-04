import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

// Login form component for user authentication flow.
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  // Reactive form: form fields are controlled through FormGroup and FormControl.
  myform = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}

  // Submit flow: after valid form submission, route to dashboard.
  onSubmit() {
    this.router.navigate(['/dashboard']);
  // if (this.myform.valid) {
  //   console.log(this.myform.value);

  //   const { name, email, password } = this.myform.value;

  //   this.router.navigate(['/dashboard']);
  // } else {
  //   this.myform.markAllAsTouched();
  // }
}
}