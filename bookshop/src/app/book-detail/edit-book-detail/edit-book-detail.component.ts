import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from 'src/app/books.service';
import { BookItem } from 'src/app/models/book-item.interface';
import { NewBookItem } from 'src/app/models/new-book-item.interface';

@Component({
  selector: 'app-edit-book-detail',
  templateUrl: './edit-book-detail.component.html',
  styleUrls: ['./edit-book-detail.component.scss'],
})
export class EditBookDetailComponent implements OnInit {
  @Input()
  selectedBook: BookItem | null = null;

  @Output()
  updatedBook: EventEmitter<BookItem> = new EventEmitter<BookItem>

  editBookForm: FormGroup = new FormGroup({});

  constructor(
    private readonly fb: FormBuilder,
    private readonly bookService: BooksService
  ) {}

  ngOnInit(): void {
    this.editBookForm = this.fb.group({
      title: [this.selectedBook?.title],
      author: [this.selectedBook?.author],
      bound: [this.selectedBook?.bound],
      text: [this.selectedBook?.text],
      price: [this.selectedBook?.price],
      imgUrl: [this.selectedBook?.imgUrl],
      isbn: [this.selectedBook?.isbn],
      publisher: [this.selectedBook?.publisher],
      ageCategory: [this.selectedBook?.ageCategory],
      pageNumber: [this.selectedBook?.pageNumber],
      yearPublished: [this.selectedBook?.yearPublished],
    });
  }

  editBook(): void {
    if (this.selectedBook && this.editBookForm.valid) {
      const bookId = this.selectedBook.id;
      const updatedBookData: BookItem = {
        id: this.selectedBook.id,
        title: this.editBookForm.value.title,
        author: this.editBookForm.value.author,
        bound: this.editBookForm.value.bound,
        text: this.editBookForm.value.text,
        price: this.editBookForm.value.price,
        imgUrl: this.editBookForm.value.imgUrl,
        isbn: this.editBookForm.value.isbn,
        publisher: this.editBookForm.value.publisher,
        ageCategory: this.editBookForm.value.ageCategory,
        pageNumber: this.editBookForm.value.pageNumber,
        yearPublished: this.editBookForm.value.yearPublished,
        quantity: 1,
      };

      this.bookService.editBook(updatedBookData, bookId).subscribe(() => {
        window.alert('Könyvadatok sikeresen frissítve!');
        this.updatedBook.emit(updatedBookData);
      });
    }

  }
}
