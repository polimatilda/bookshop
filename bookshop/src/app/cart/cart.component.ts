import { Component, OnInit } from '@angular/core';
import { BookItem } from '../models/book-item.interface';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: BookItem[] = [];
  totalPrice: number = 0;
  shippingPrice: number = 1200;
  totalWithShipping: number = 0;

  constructor(private readonly booksService: BooksService) {
    const existingCartItems = localStorage.getItem('cartItems');
    if (existingCartItems) {
      this.cartItems = JSON.parse(existingCartItems);
    }
  }

  ngOnInit(): void {
    this.calculateTotalPrice();
    this.calculateTotalPriceWithShipping();
  }

  calculateTotalPrice() {
    this.totalPrice = this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  calculateTotalPriceWithShipping() {
    this.totalWithShipping = this.totalPrice + this.shippingPrice;
  }

  updatePrice(item: BookItem, newQuantity: number) {
    item.quantity = newQuantity;
    this.calculateTotalPrice();
    this.calculateTotalPriceWithShipping();
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  removeItem(item: BookItem) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
      this.calculateTotalPrice();
      this.calculateTotalPriceWithShipping();
    }
  }
}
