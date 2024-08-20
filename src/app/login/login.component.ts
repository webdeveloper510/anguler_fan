import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  apiError: string | null = null; // To store the API error message

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Reset the API error when the user makes changes to the input fields
    this.loginForm.valueChanges.subscribe(() => {
      this.apiError = null;
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.apiError = null; // Clear previous error
      this.authService.login(this.loginForm.value)
      .subscribe(
        (response: any) => {
          console.log('Login successful', response);
          this.router.navigate(['/home']);
        },
        (error: any) => {
          console.log('Login error', error);
          this.apiError = error.error?.message || 'Login failed. Please try again.'; // Set error message
        }
      );
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  register() {
    this.router.navigate(['/register']);
  }
}
