import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable, map } from 'rxjs';
import { BookItem } from './models/book-item.interface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private readonly http: HttpClient) {}

  private readonly url = environment.backendUrl;

  getAllBooks(): Observable<BookItem[]> {
    return this.http.get<BookItem[]>(`${this.url}/books`).pipe(
      map((data) => {
        console.log(data);
        return data.map((item) => ({
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
      })
    );
  }
}
