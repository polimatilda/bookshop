import { Component, Input, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'
import { BooksService } from 'src/app/books.service';
import { Router } from '@angular/router';
import { BookItem } from 'src/app/models/book-item.interface';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  
  @Input()
  title: string = ""
  
  @Input()
  author: string = ""
  
  @Input()
  price: number = 0
  
  @Input()
  imgUrl: string = ""

  @Input()
  id: number = 0
  
  ngOnInit(): void {

  }
}
