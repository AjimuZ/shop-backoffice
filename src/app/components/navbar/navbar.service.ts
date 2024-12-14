import { Injectable } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Store } from '../../interfaces/store.interface';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  constructor(private inventoryService: InventoryService) {}

  // get store name by calling the API
  async loadShopName(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      this.inventoryService.getStoreDetails().subscribe({
        next: (data: Store) => {
          if (data && data.name) {
            resolve(data.name);
          } else {
            reject('shop name not found');
          }
        },
        error: (error) => {
          console.error('error retrieving shop information:', error);
          reject('error retrieving shop information');
        },
      });
    });
  }
}
