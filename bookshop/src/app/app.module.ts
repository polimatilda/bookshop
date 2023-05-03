import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BooksModule } from './books/books.module';
import { BooksService } from './books.service';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailModule } from './book-detail/book-detail.module';

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
    BookDetailModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
