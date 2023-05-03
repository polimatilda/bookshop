import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { BookItem } from '../models/book-item.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  selectedBook: BookItem | null = null;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly booksService: BooksService
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      const id = parseInt(bookId, 10);
      this.booksService.getBookById(id).subscribe((book: BookItem | null) => {
        this.selectedBook = book;
      });
    }
  }

}
