import { Product } from './../../interfaces/product.interface';
import { Injectable } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Store } from '../../interfaces/store.interface';
import { catchError, of } from 'rxjs';
import { UtilityService } from '../../services/utility.service';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  constructor(
    private inventoryService: InventoryService,
    private utilityService: UtilityService
  ) {}

  // delete product by ID
  deleteProductById(productId: string): void {
    this.inventoryService.deleteProduct(productId).subscribe({
      next: (product) => {
        console.log('product deleted successfully:', product);
        this.utilityService.reloadLocation();
      },
      error: (err) => {
        console.error('error delete product:', err);
        this.utilityService.reloadLocation();
      },
    });
  }
}
