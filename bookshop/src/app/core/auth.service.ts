import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly backendUrl = environment.backendUrl;

  constructor(
    private readonly httpClient: HttpClient,
    private readonly cookieService: CookieService
  ) {}

  registration(username: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.backendUrl}/registration`, {
      username,
      password,
    });
  }

  login(username: string, password: string): Observable<any> {
    return this.httpClient.post(`${this.backendUrl}/login`, {
      username,
      password,
    });
  }

  logout(): void {
    this.cookieService.delete('token');
  }

  isLoggedIn() {
    return this.cookieService.check('token');
  }
}
