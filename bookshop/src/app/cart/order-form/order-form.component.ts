import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/books.service';
import { BookItem } from 'src/app/models/book-item.interface';
import { OrderItem } from 'src/app/models/order.interface';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent implements OnInit {
  orderDataForm: FormGroup = new FormGroup({});

  constructor(
    private readonly fb: FormBuilder,
    private readonly booksService: BooksService,
    private readonly router: Router
  ) {}

  @Input()
  totalPrice: number = 0;

  @Input()
  shippingPrice: number = 0;

  @Input()
  totalWithShipping: number = 0;

  @Input()
  cartItems: BookItem[] = [];

  ngOnInit(): void {
    this.orderDataForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      city: ['', Validators.required],
      address: ['', Validators.required],
      postal: ['', Validators.required],
    });
  }

  onPlaceOrder() {
    console.log(this.orderDataForm.valid);
    const orderData: OrderItem = {
      name: this.orderDataForm.value.name,
      email: this.orderDataForm.value.email,
      phone: this.orderDataForm.value.phone,
      city: this.orderDataForm.value.city,
      address: this.orderDataForm.value.address,
      postal: this.orderDataForm.value.postal,
      payableAmount: this.totalWithShipping,
      books: this.cartItems,
    };

    this.booksService.orderBooks(orderData).subscribe((order) => {
      this.orderDataForm.reset();
      window.alert('Rendelése elküldésre került!');
      this.router.navigate(['books']);
    });
  }
}
