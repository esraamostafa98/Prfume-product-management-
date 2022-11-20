import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand">{{ pageTitle }}</a>
        <ul class="nav nav-pills">
          <li>
            <a
              class="nav-link"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              routerLink="/welcome"
              >Home</a
            >
          </li>
          <li>
            <a
              class="nav-link"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              routerLink="/products"
              >Product List</a
            >
          </li>
          <li>
            <a
              class="nav-link"
              routerLinkActive="active"
              [routerLinkActiveOptions]="{ exact: true }"
              [routerLink]="['/products/0/edit']"
              >Add Product</a
            >
          </li>

          <li><a class="nav-link" routerLink="/signup">SignUp</a></li>
        </ul>
      </div>
    </nav>
    <br />
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pageTitle: string = 'Perfume Product Management';
}
