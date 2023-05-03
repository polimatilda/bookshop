import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-detail.component';
import { BookDetailsRoutingModule } from './books-routing.module';



@NgModule({
  declarations: [
    BookDetailComponent
  ],
  imports: [
    CommonModule, BookDetailsRoutingModule
  ]
})
export class BookDetailModule { }
