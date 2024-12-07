import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { DashboardService } from './dashboard.service';
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-dashboard',
  imports: [ProductCardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  products: Product[] = [];

  constructor(private dashboardService: DashboardService) {}
  
  async ngOnInit(): Promise<void> {
    // product list initialization
    await this.dashboardService.loadProducts(this.products);
  }

}
