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

  constructor(
    private readonly booksService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  pageSize = 1;
  currentPage = 1;
  totalBooks = 0;
  totalPages = 0;

  ngOnInit(): void {
    // this.loadBooks()
    this.booksService.getAllBooks(this.currentPage, this.pageSize).subscribe((value) => {
      this.booksList = value;
    })
  }

  // loadBooks(): void {
  //   this.booksService.getAllBooks(this.currentPage, this.pageSize).subscribe((value) => {
  //     this.booksList = value;
  //   });
  
  //   // Get the total number of books to calculate total pages
  //   // this.booksService.getTotalBooks().subscribe((total) => {
  //   //   this.totalBooks = total;
  //   //   this.totalPages = Math.ceil(this.totalBooks / this.pageSize);
  //   // });
  // }

  // loadBooks(): void {
  //   this.booksService
  //     .getBooksByAgeCategory(this.selectedAgeCategory, this.currentPage, this.pageSize)
  //     .subscribe((result) => {
  //       this.booksList = result.books;
  //       this.totalBooks = result.totalCount;
  //       this.totalPages = Math.ceil(this.totalBooks / this.pageSize);
  //     });
  // }

  // loadBooks(): void {
  //   this.booksService
  //     .getBooksByAgeCategory(this.selectedAgeCategory, this.currentPage, this.pageSize)
  //     .subscribe((result) => {
  //       this.booksList = result.books;
  //       this.totalBooks = result.totalCount;
  //       this.totalPages = Math.ceil(this.totalBooks / this.pageSize);
  //     });
  // }

  filterBooks(ageCategory: string): void {
    this.selectedAgeCategory = ageCategory;
    this.booksService.getBooksByAgeCategory(ageCategory, this.currentPage, this.pageSize).subscribe((value) => {
      this.booksList = value;
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { ageCategory: ageCategory },
      });
    });
  }

  // filterBooks(ageCategory: string): void {
  //   this.selectedAgeCategory = ageCategory;
  //   this.currentPage = 1;
  //   this.loadBooks();

  //   this.router.navigate([], {
  //     relativeTo: this.route,
  //     queryParams: { ageCategory: ageCategory },
  //   });
  // }

  // goToNextPage(): void {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //     this.loadBooks();
  //   }
  // }

  // goToPreviousPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.loadBooks();
  //   }
  // }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
