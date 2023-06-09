import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminGuard } from './admin.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksService } from '../books.service';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule, AdminRoutingModule, ReactiveFormsModule, FormsModule
  ],
  providers: [AdminGuard, BooksService]
})
export class AdminModule { }
