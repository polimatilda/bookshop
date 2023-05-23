import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailComponent } from './book-detail.component';
import { BookDetailsRoutingModule } from './book-detail-routing.module';
import { BooksService } from '../books.service';
import { EditBookDetailComponent } from './edit-book-detail/edit-book-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BookDetailComponent,
    EditBookDetailComponent
  ],
  imports: [
    CommonModule, BookDetailsRoutingModule, ReactiveFormsModule, FormsModule
  ],
  providers: [BooksService]
})
export class BookDetailModule { }
