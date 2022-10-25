import { ProductDetailGuard } from './products/product-detail.guard';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductModule } from './products/product.module';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, ErrorsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '404', component: ErrorsComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' },
    ]),
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
