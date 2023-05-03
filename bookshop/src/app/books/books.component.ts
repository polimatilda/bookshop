import { Component, OnInit } from '@angular/core';
import { BookItem } from '../models/book-item.interface';
import { BooksService } from '../books.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  booksList: BookItem[] = [];
  subscription: Subscription = new Subscription();

  constructor(private readonly booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe((value) => {
      this.booksList = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
