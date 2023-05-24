import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from '../books.service';
import { ReactiveFormsModule } from '@angular/forms';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let mockBooksService: jasmine.SpyObj<BooksService>;

  beforeEach(async () => {
    mockBooksService = jasmine.createSpyObj('BooksService', ['getBooks']);

    await TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [HttpClientModule, ReactiveFormsModule],
      providers: [{ provide: BooksService, useValue: mockBooksService }],
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
