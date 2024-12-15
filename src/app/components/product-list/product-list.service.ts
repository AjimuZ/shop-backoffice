import { Injectable } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  constructor() {}

  removeProductById(products: Product[], idToRemove: string): void {
    const index = products.findIndex((product) => product.id === idToRemove);
    if (index !== -1) {
      products.splice(index, 1);
    }
  }
}
