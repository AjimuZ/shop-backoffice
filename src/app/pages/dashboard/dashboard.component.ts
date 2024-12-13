import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../interfaces/product.interface';
import { DashboardService } from './dashboard.service';
import { AddProductComponent } from '../../components/add-product/add-product.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LayoutType } from '../../enums/layout-type';

@Component({
  selector: 'app-dashboard',
  imports: [ProductListComponent, AddProductComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  layout: LayoutType = LayoutType.grid; // default layout

  constructor(private dashboardService: DashboardService) {}

  async ngOnInit(): Promise<void> {
    // product list initialization
    await this.dashboardService.loadProducts(this.products);
  }

  openAddProductModal(): void {
    const addProductModalElement = document.getElementById('addProductModal');
    if (addProductModalElement) {
      const addProductModal = new (window as any).bootstrap.Modal(
        addProductModalElement
      );
      addProductModal.show();
    }
  }

  toggleLayout(layout: LayoutType) {
    this.layout = layout;
  }
}
