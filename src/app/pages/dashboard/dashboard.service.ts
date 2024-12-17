import { Injectable } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Product } from '../../interfaces/product.interface';
import { ErrorPropagationService } from '../../services/error-propagation.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(
    private inventoryService: InventoryService,
    private errorPropagationService: ErrorPropagationService
  ) {}

  // product list initialization calling api
  loadProducts(products: Product[]): void {
    this.inventoryService.getProducts().subscribe({
      next: (data: Product[]) => {
        // erase the array and update it with new data
        products.splice(0, products.length, ...data);
      },
      error: (error) => {
        console.error('error retrieve products:', error);
        this.errorPropagationService.propagateError('Error retrieve products');
      },
    });
  }
}
