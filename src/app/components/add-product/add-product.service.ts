import { ProductForm } from './../../interfaces/product-form.interface';
import { Injectable } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Store } from '../../interfaces/store.interface';
import { UtilityService } from '../../services/utility.service';
import { ErrorPropagationService } from '../../services/error-propagation.service';

@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  constructor(
    private inventoryService: InventoryService,
    private utilityService: UtilityService,
    private errorPropagationService: ErrorPropagationService
  ) {}

  // add product by calling the API
  addProduct(product: ProductForm): void {
    this.inventoryService.addProduct(product).subscribe({
      next: (product) => {
        console.log('product added successfully:', product);
        this.utilityService.reloadLocation();
      },
      error: (err) => {
        console.error('error adding product:', err);
        this.errorPropagationService.propagateError('error adding product');
      },
    });
  }
}
