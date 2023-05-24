import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { BookDetailComponent } from './book-detail.component';
import { BooksService } from '../books.service';
import { AuthService } from '../core/auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookDetailComponent', () => {
  let component: BookDetailComponent;
  let fixture: ComponentFixture<BookDetailComponent>;
  let mockActivatedRoute: any;

  beforeEach(async () => {
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: (key: string) => '1'
        }
      }
    };

    await TestBed.configureTestingModule({
      declarations: [BookDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        BooksService,
        AuthService,
        Router
      ],
      imports: [HttpClientModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});