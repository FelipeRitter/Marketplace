import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss'
})
export class SignUp {
  private readonly formBuilder = inject(FormBuilder);

  readonly signUpForm = this.formBuilder.nonNullable.group({
    fullName: ['Alex Morgan', [Validators.required, Validators.minLength(3)]],
    birthDate: ['1992-04-16', Validators.required],
    documentNumber: ['US-928-44-1830', Validators.required],
    email: ['alex.morgan@example.com', [Validators.required, Validators.email]],
    phone: ['+1 512 555 0198', Validators.required],
    street: ['Market Street', Validators.required],
    number: ['482', Validators.required],
    complement: ['Apt 1204'],
    neighborhood: ['Central District', Validators.required],
    city: ['Austin', Validators.required],
    state: ['TX', Validators.required],
    postalCode: ['78701', Validators.required],
    country: ['United States', Validators.required]
  });

  wasSubmitted = false;

  submitSignUp(): void {
    // The mock prototype keeps the form local while preserving the future submit flow.
    this.wasSubmitted = true;
    this.signUpForm.markAllAsTouched();
  }
}
