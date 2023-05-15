import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-alert',
  templateUrl: './cookie-alert.component.html',
  styleUrls: ['./cookie-alert.component.scss']
})
export class CookieAlertComponent {
  constructor(
    private readonly cookieServie: CookieService
  ) {}

  acceptCookies(): void {
    this.cookieServie.set('cookieAccepted', 'true')
  }
}
