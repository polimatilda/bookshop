import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent  {
  
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

}
