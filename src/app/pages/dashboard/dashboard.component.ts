import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { Product } from '../../interfaces/product.interface';
import { DashboardService } from './dashboard.service';
import { AddProductComponent } from '../../components/add-product/add-product.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { LayoutType } from '../../enums/layout-type';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [ProductListComponent, AddProductComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  layout: LayoutType = LayoutType.grid; // default layout

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {
    // listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.ngOnInit();
      }
    });
  }

  ngOnInit(): void {
    // product list initialization
    this.dashboardService.loadProducts(this.products);
  }

  // if true, the Add Product modal is opened; otherwise, it is closed
  toggleAddProductModal(isOpen: boolean): void {
    const addProductModalElement = document.getElementById('addProductModal');
    if (addProductModalElement) {
      const addProductModal = new (window as any).bootstrap.Modal(
        addProductModalElement
      );
      isOpen ? addProductModal.show() : this.closeModal();
    }
  }

  closeModal() {
    window.location.reload();
  }

  toggleLayout(layout: LayoutType) {
    this.layout = layout;
  }
}
