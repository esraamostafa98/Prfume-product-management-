import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  PageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string = '';
  sub: Subscription;
  private _listFiliter: string = '';
  get listFiliter(): string {
    return this._listFiliter;
  }
  set listFiliter(value: string) {
    this._listFiliter = value;
    console.log('in setter', value);
    this.filterdProducts = this.perfoemFilter(value);
  }
  filterdProducts: IProduct[] = [];

  products: IProduct[] = [];
  constructor(private productService: ProductService) {}

  perfoemFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().includes(filterBy)
    );
  }

  toggleImage() {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filterdProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
    this.filterdProducts = this.products;
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.PageTitle = 'Product List: ' + message;
  }
  getdata(): IProduct[] {
    return this.products;
  }
}
