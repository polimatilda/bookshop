import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksModule } from './books/books.module';
import { BooksService } from './books.service';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailModule } from './book-detail/book-detail.module';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';
import { RegistrationModule } from './registration/registration.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BooksModule,
    HttpClientModule,
    BookDetailModule,
    CartModule,
    CoreModule,
    RegistrationModule,
    LoginModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
