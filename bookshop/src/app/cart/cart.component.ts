import { Component } from '@angular/core';
import { BookItem } from '../models/book-item.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  cartItems: BookItem[] = []

  constructor() {
    const existingCartItems = localStorage.getItem('cartItems');
    if (existingCartItems) {
      this.cartItems = JSON.parse(existingCartItems);
    }
  }

}
