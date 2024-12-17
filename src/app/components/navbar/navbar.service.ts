import { Injectable } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Store } from '../../interfaces/store.interface';
import { ErrorPropagationService } from '../../services/error-propagation.service';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor(
    private inventoryService: InventoryService,
    private errorPropagationService: ErrorPropagationService
  ) {}

  // get store name by calling the API
  async loadShopName(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.inventoryService.getStoreDetails().subscribe({
        next: (data: Store) => {
          if (data && data.name) {
            resolve(data.name);
          } else {
            this.errorPropagationService.propagateError('Shop name not found');
            reject('shop name not found');
          }
        },
        error: (error) => {
          console.error('error retrieving shop information:', error);
          this.errorPropagationService.propagateError('Error retrieving shop information');
          reject('error retrieving shop information');
        },
      });
    });
  }
}
