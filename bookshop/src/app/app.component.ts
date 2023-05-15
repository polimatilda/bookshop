import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshop';

  constructor(
    private readonly cookieService: CookieService
  ) {}

  isCookieAccepted(): boolean {
    return this.cookieService.get('cookieAccepted') === 'true'
  }
}
