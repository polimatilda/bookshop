import { Component, Input, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'


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
  
  ngOnInit(): void {

  }

}
