import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IProduct } from './product';

export class ProductData implements InMemoryDbService {
  createDb() {
    const products: IProduct[] = [
      {
        id: 1,
        productName: 'Xoom Lady',
        productCode: 'GDN-0011',
        releaseDate: 'March 19, 2023',
        description: 'Xoom Lady',
        price: 19.95,
        starRating: 3.2,
        imageUrl: 'assets/images/1.png',
        tags: ['rake', 'leaf', 'yard', 'home'],
      },
      {
        id: 2,
        productName: 'Lovlybee',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2023',
        description: 'Lovlybee',
        price: 32.99,
        starRating: 4.2,
        imageUrl: 'assets/images/2.png',
        tags: ['rake', 'leaf', 'yard', 'home'],
      },
      {
        id: 3,
        productName: 'CovyFox',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2023',
        description: 'CovyFox',
        price: 8.9,
        starRating: 4.8,
        imageUrl: 'assets/images/3.png',
        tags: ['rake', 'leaf', 'yard', 'home'],
      },
      {
        id: 4,
        productName: 'Everelly',
        productCode: 'TBX-0022',
        releaseDate: 'May 15, 2023',
        description: 'Everelly',
        price: 11.55,
        starRating: 3.7,
        imageUrl: 'assets/images/4.png',
      },
      {
        id: 5,
        productName: 'IcyFlamma',
        productCode: 'GMG-0042',
        releaseDate: 'October 15, 2023',
        description: 'IcyFlamma',
        price: 35.95,
        starRating: 4.6,
        imageUrl: 'assets/images/5.png',
      },
    ];
    return { products };
  }
}
