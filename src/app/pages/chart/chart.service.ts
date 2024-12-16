import { Injectable } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { StatsCategories } from '../../interfaces/stats-categories.interface';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  constructor(private inventoryService: InventoryService) {}

  // stats list initialization calling api
  async loadProducts(statsCategories: StatsCategories[]): Promise<StatsCategories[]> {
    return new Promise<StatsCategories[]>((resolve, reject) => {
      this.inventoryService.getStatsCategories().subscribe({
        next: (data: StatsCategories[]) => {
          // erase the array and update it with new data
          statsCategories.splice(0, statsCategories.length, ...data);
          resolve(statsCategories);
        },
        error: (error) => {
          console.error('error retrieve stats:', error);
          reject(null);
        },
      });
    });
  }

}
