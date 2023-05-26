import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', animate('1000ms 1000ms ease-in-out', style({ opacity: 1 }))),
    ])
  ]
})
export class HomeComponent implements OnInit {
  buttonState: string = 'void';

  ngOnInit(): void {
    this.buttonState = 'in';
  }

}
