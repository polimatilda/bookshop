import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { BookItem } from './models/book-item.interface';
import { OrderItem } from './models/order.interface';
import { NewBookItem } from './models/new-book-item.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private readonly http: HttpClient) {}

  private readonly url = environment.backendUrl;
  private ageCategorySource = new BehaviorSubject<string>('');
  ageCategory$ = this.ageCategorySource.asObservable();
  booksList: BookItem[] = [];

  getAllBooks(): Observable<BookItem[]> {
    return this.http.get<BookItem[]>(`${this.url}/books`).pipe(
      map((data) => {
        this.booksList = data.map((item) => ({
          id: item.id,
          title: item.title,
          author: item.author,
          bound: item.bound,
          text: item.text,
          price: item.price,
          imgUrl: item.imgUrl,
          isbn: item.isbn,
          publisher: item.publisher,
          ageCategory: item.ageCategory,
          pageNumber: item.pageNumber,
          yearPublished: item.yearPublished,
          quantity: item.quantity
        }));
        return this.booksList;
      })
    );
  }

  getBookById(id: number): Observable<BookItem | null> {
    return this.http.get<BookItem | null>(`${this.url}/books/${id}`);
  }

  setAgeCategory(ageCategory: string): void {
    this.ageCategorySource.next(ageCategory);
  }

  getBooksByAgeCategory(ageCategory: string): Observable<BookItem[]> {
    if (!ageCategory) {
      return this.getAllBooks();
    }

    
    const params = {
      ageCategory,
    };
    return this.http.get<BookItem[]>(`${this.url}/books`, { params });
  }

  searchBooks(searchTerm: string): Observable<BookItem[]> {
    if(!searchTerm) {
      return this.getAllBooks()
    }

    const params = {
      searchTerm, 
    };

    return this.http.get<BookItem[]>(`${this.url}/books`, { params });
  }

  orderBooks(order: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(`${this.url}/orders`, order);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/books/${id}`);
  }

  addBook(book: NewBookItem): Observable<BookItem> {
    return this.http.post<BookItem>(`${this.url}/books`, book)
  }

  editBook(book: BookItem, id: number): Observable<BookItem> {
    return this.http.put<BookItem>(`${this.url}/books/${id}`, book)
  }
}
