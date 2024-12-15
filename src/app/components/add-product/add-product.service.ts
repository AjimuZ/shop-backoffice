import { ProductForm } from './../../interfaces/product-form.interface';
import { Injectable } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Store } from '../../interfaces/store.interface';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  constructor(private inventoryService: InventoryService) {}

  // add product by calling the API
  async addProduct(product: ProductForm): Promise<void> {
    this.inventoryService.addProduct(product).subscribe({
        next: (product) => {
          console.log('product added successfully:', product);
        },
        error: (err) => {
          console.error('error adding product:', err);
        }
      });
  }

}