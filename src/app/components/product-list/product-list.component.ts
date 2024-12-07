import { Component } from '@angular/core';
import { ProductListService } from './product-list.service';
import { Product } from '../../interfaces/product.interface';
import { ProductCardComponent } from "../product-card/product-card.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products: Product[] = [];

  constructor(private productListService: ProductListService) {}
  
  async ngOnInit(): Promise<void> {
    // product list initialization
    await this.productListService.loadProducts(this.products);
  }

}
