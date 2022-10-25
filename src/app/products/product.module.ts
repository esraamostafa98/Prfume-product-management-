import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ConvertToSpacePipe } from '../shared/convert-to-spaces.pipe';

import { ProductDetailsComponent } from './product-details.component';

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertToSpacePipe,
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        canActivate: [ProductDetailGuard],
        component: ProductDetailsComponent,
      },
    ]),
    SharedModule,
  ],
})
export class ProductModule {}
