import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderFormComponent } from './order-form/order-form.component';



@NgModule({
  declarations: [CartComponent, OrderFormComponent],
  imports: [
    CommonModule, CartRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class CartModule { }
