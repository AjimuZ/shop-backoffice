import { Product } from './../../interfaces/product.interface';
import { Injectable } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Store } from '../../interfaces/store.interface';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  constructor(private inventoryService: InventoryService) {}

  // delete product by ID
  async deleteProductById(productId: string): Promise<void> {
    this.inventoryService
      .deleteProduct(productId)
      .pipe(
        catchError((error) => {
          console.error('error', error);
          return of();
        })
      )
      .subscribe();
  }

}