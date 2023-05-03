import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BooksRoutingModule } from './books-routing.module';

@NgModule({
  declarations: [BooksComponent, BookItemComponent],
  imports: [
    CommonModule, BooksRoutingModule
  ]
})
export class BooksModule { }
