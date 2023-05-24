import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewBookItem } from '../models/new-book-item.interface';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  newBookDataForm: FormGroup = new FormGroup({});

  constructor(
    private readonly bookService: BooksService,
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.newBookDataForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      bound: ['', Validators.required],
      text: ['', Validators.required],
      price: [0, Validators.required],
      imgUrl: ['', Validators.required],
      isbn: ['', Validators.required],
      publisher: ['', Validators.required],
      ageCategory: ['', Validators.required],
      pageNumber: [0, Validators.required],
      yearPublished: [0, Validators.required],
    });
  }

  addBook(): void {
    console.log(this.newBookDataForm.valid);
    if (this.newBookDataForm.valid) {
      const newBookData: NewBookItem = {
        title: this.newBookDataForm.value.title,
        author: this.newBookDataForm.value.author,
        bound: this.newBookDataForm.value.bound,
        text: this.newBookDataForm.value.text,
        price: this.newBookDataForm.value.price,
        imgUrl: this.newBookDataForm.value.imgUrl,
        isbn: this.newBookDataForm.value.isbn,
        publisher: this.newBookDataForm.value.publisher,
        ageCategory: this.newBookDataForm.value.ageCategory,
        pageNumber: this.newBookDataForm.value.pageNumber,
        yearPublished: this.newBookDataForm.value.yearPublished,
        quantity: 1,
      };

      this.bookService.addBook(newBookData).subscribe(() => {
        window.alert('Könyv sikeresen hozzáadva az adatbázishoz!');
      });
    } else {
      window.alert('Töltsön ki minend mezőt!')
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  //TODO: fájlfeltöltést lekezelni
}
