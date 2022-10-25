import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styles: [
    `
      .card-header {
        background-color: #faebf2;
      }
    `,
  ],
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';
}
