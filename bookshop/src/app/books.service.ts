import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { BookItem } from './models/book-item.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private readonly http: HttpClient) {}

  private readonly url = environment.backendUrl;
  private ageCategorySource = new BehaviorSubject<string>('');
  ageCategory$ = this.ageCategorySource.asObservable();
  booksList: BookItem[] = [];

  // getAllBooks(page: number, pageSize: number): Observable<{ books: BookItem[]; totalCount: number }> {
  //   const params = {
  //     page: page.toString(),
  //     pageSize: pageSize.toString(),
  //   };

  //   return this.http.get<BookItem[]>(`${this.url}/books`, { params }).pipe(
  //     map((data) => {
  //       this.booksList = data.map((item) => ({
  //         id: item.id,
  //         title: item.title,
  //         author: item.author,
  //         bound: item.bound,
  //         text: item.text,
  //         price: item.price,
  //         imgUrl: item.imgUrl,
  //         isbn: item.isbn,
  //         publisher: item.publisher,
  //         ageCategory: item.ageCategory,
  //         pageNumber: item.pageNumber,
  //         yearPublished: item.yearPublished,
  //       }));
  //       return { books: this.booksList, totalCount: this.booksList.length };
  //     })
  //   );
  // }

  getAllBooks(page: number, pageSize: number): Observable<BookItem[]> {
    const params = {
      page: page.toString(),
      pageSize: pageSize.toString(),
    };

    return this.http.get<BookItem[]>(`${this.url}/books`, { params }).pipe(
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

  getBooksByAgeCategory(
    ageCategory: string,
    page: number,
    pageSize: number
  ): Observable<BookItem[]> {
    if (!ageCategory) {
      return this.getAllBooks(page,pageSize);
    }

    const params = {
      ageCategory,
      page: page.toString(),
      pageSize: pageSize.toString(),
    };
    return this.http.get<BookItem[]>(`${this.url}/books`, { params });
  }

  // getBooksByAgeCategory(
  //   ageCategory: string,
  //   page: number,
  //   pageSize: number
  // ): Observable<{ books: BookItem[]; totalCount: number }> {
  //   if (!ageCategory) {
  //     return this.getAllBooks(page, pageSize);
  //   }
  
  //   const params = {
  //     ageCategory,
  //     page: page.toString(),
  //     pageSize: pageSize.toString(),
  //   };
  //   return this.http.get<{ books: BookItem[]; totalCount: number }>(`${this.url}/books`, { params });
  // }
}
