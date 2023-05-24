import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFormComponent } from './order-form.component';
import { BooksService } from 'src/app/books.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('OrderFormComponent', () => {
  let component: OrderFormComponent;
  let fixture: ComponentFixture<OrderFormComponent>;
  let mockBooksService: jasmine.SpyObj<BooksService>;
  beforeEach(async () => {
    mockBooksService = jasmine.createSpyObj('BooksService', ['placeOrder']);

    await TestBed.configureTestingModule({
      declarations: [OrderFormComponent],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [{ provide: BooksService, useValue: mockBooksService }],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
