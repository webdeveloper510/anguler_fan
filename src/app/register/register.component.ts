import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  formVisible: boolean = false;
  selectedButton: string | null = null;
  apiError: string | null = null; // Variable to store the API error message

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Reset the API error when the user makes changes to the input fields
    this.registerForm.valueChanges.subscribe(() => {
      this.apiError = null;
    });
  }

  showForm(buttonType: string) {
    this.formVisible = true;
    this.selectedButton = buttonType;
    this.apiError = null; // Clear error when showing the form
  }

  back() {
    this.formVisible = false;
  }

  get formControls() {
    return this.registerForm.controls;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.apiError = null; // Clear previous error
      this.authService.register(this.registerForm.value).subscribe(
        (response: any) => {
          console.log('Register successful', response);
          this.router.navigate(['/home']);
        },
        (error: any) => {
          console.log('Register error', error);
          this.apiError =
            error.error?.message || 'Registration failed. Please try again.'; // Set error message
        }
      );
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
