import { Component, OnInit } from '@angular/core';
import { BookItem } from '../models/book-item.interface';
import { BooksService } from '../books.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  booksList: BookItem[] = [];
  subscription: Subscription = new Subscription();
  selectedAgeCategory: string = '';

  p: number = 1;
  collection: any[] = this.booksList;

  constructor(
    private readonly booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.booksService.getAllBooks().subscribe((value) => {
      this.booksList = value;
    })
  }

  filterBooks(ageCategory: string): void {
    this.selectedAgeCategory = ageCategory;
    this.booksService.getBooksByAgeCategory(ageCategory).subscribe((value) => {
      this.booksList = value;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { ageCategory: ageCategory },
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
