import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookItemComponent } from './book-item/book-item.component';



@NgModule({
  declarations: [BooksComponent, BookItemComponent],
  imports: [
    CommonModule
  ],
  exports: [BooksComponent]
})
export class BooksModule { }
