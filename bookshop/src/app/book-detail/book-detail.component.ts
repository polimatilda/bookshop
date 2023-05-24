import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { BookItem } from '../models/book-item.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  selectedBook: BookItem | null = null;
  bookAddedToCartAlert: boolean = false
  
  constructor(
    private readonly route: ActivatedRoute,
    private readonly booksService: BooksService,
    private readonly authService: AuthService,
    private readonly router: Router
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

  addToCart(selectedBook: BookItem): void {
    let cartItems: BookItem[] = [];
    const existingCartItems = localStorage.getItem('cartItems');
    if (existingCartItems) {
      cartItems = JSON.parse(existingCartItems);
    }
    cartItems.push(selectedBook);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    this.bookAddedToCartAlert = true
  }

  isAdminLoggedIn(): boolean {
    return this.authService.isLoggedIn() ? true : false
  }

  deleteBook(): void {
    if(this.selectedBook) {
      this.booksService.deleteBook(this.selectedBook.id).subscribe(() => {
        this.router.navigate(['books']);
      })
    }
  }

  updateSelectedBook(book: BookItem): void {
    this.selectedBook = book;
  }
}
