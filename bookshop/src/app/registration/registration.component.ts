import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from './password.validator';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  registrationForm = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        AppValidators.createPasswordStrengthValidator(),
      ],
    }),
  });

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  onSubmit() {
    console.log(this.registrationForm);
    if (this.registrationForm.valid) {
      this.authService
        .registration(
          this.registrationForm.controls.username.value!,
          this.registrationForm.controls.password.value!
        )
        .subscribe(() => console.log('OK'));
        this.router.navigate(['books']);
    }
  }
}
