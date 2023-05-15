import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] }),
  });

  constructor(
    private readonly authService: AuthService,
    private readonly cookieService: CookieService,
    private readonly router: Router
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService
        .login(
          this.loginForm.controls.username.value!,
          this.loginForm.controls.password.value!
        )
        .subscribe((result) => {
          console.log(result);
          this.cookieService.set('token', result.token, new Date('2100'));
        });
    }
    console.log(this.loginForm);
    this.router.navigate(['books']);
  }
}
