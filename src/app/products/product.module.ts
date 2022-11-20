//import { ProductEditGuard } from './product-edit.guard';
import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ConvertToSpacePipe } from '../shared/convert-to-spaces.pipe';

import { ProductDetailsComponent } from './product-details.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';

import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditGuard } from './product-edit/product-edit.guard';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertToSpacePipe,
    ProductEditComponent,
    // ProductEditComponent,
  ],
  imports: [
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent,
      },
      {
        path: 'products/:id/edit',
        canDeactivate: [ProductEditGuard],
        component: ProductEditComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
