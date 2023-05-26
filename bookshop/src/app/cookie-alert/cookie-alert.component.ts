import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-cookie-alert',
  templateUrl: './cookie-alert.component.html',
  styleUrls: ['./cookie-alert.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('1000ms 1000ms ease-in-out', style({ opacity: 1 }))),
    ])
  ]
})
export class CookieAlertComponent implements OnInit {
  cookieAlertState: string = 'void';

  constructor(
    private readonly cookieServie: CookieService
  ) {}

  ngOnInit(): void {
    this.cookieAlertState = 'in';
  }

  acceptCookies(): void {
    this.cookieServie.set('cookieAccepted', 'true')
  }
}
