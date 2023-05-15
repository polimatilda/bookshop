import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminGuard } from './admin.guard';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule, AdminRoutingModule
  ],
  providers: [AdminGuard]
})
export class AdminModule { }
