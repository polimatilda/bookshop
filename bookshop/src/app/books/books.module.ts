import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BooksRoutingModule } from './books-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [BooksComponent, BookItemComponent],
  imports: [CommonModule, BooksRoutingModule, FormsModule, NgxPaginationModule],
})
export class BooksModule {}
