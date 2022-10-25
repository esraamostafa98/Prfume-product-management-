import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { ConvertToSpacePipe } from '../shared/convert-to-spaces.pipe';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`;
    if (id) {
      this.getProduct(id);
    }
  }

  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe({
      next: (product) => (this.product = product),
      error: (err) => (this.errorMessage = err),
    });
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }
}
