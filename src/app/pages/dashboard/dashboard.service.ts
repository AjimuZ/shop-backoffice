import { Injectable } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})

export class DashboardService {
    
  constructor(private inventoryService: InventoryService) {}

  // product list initialization calling api
  loadProducts(products: Product[]): void {
      this.inventoryService.getProducts().subscribe({
      next: (data: Product[]) => {
        // erase the array and update it with new data
        products.splice(0, products.length, ...data);
      },
      error: (error) => {
        console.error('error retrieve products:', error);
      },
    });
  }

}
