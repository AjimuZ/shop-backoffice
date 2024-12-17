import { Product } from './../../interfaces/product.interface';
import { Injectable } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Store } from '../../interfaces/store.interface';
import { catchError, of } from 'rxjs';
import { UtilityService } from '../../services/utility.service';
import { ErrorPropagationService } from '../../services/error-propagation.service';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  constructor(
    private inventoryService: InventoryService,
    private utilityService: UtilityService,
    private errorPropagationService: ErrorPropagationService
  ) {}

  // delete product by ID
  deleteProductById(productId: string): void {
    this.inventoryService.deleteProduct(productId).subscribe({
      next: (product) => {
        console.log('product deleted successfully:', product);
        this.utilityService.reloadLocation();
      },
      error: (err) => {
        console.error('error deleting product:', err);
        this.errorPropagationService.propagateError('Error deleting product');
      },
    });
  }
}
