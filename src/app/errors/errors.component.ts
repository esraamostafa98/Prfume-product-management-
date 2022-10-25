import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-errors',
  template: ` <h1 class="errorMessage">404'd</h1> `,
  styles: [
    `
      .errorMessage {
        margin-top: 150px;
        font-size: 170px;
        color: #08aaca;
        text-align: center;
      }
    `,
  ],
})
export class ErrorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
