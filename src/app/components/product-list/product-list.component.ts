import { Component, Input } from '@angular/core';
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

  @Input() products?: Product[] = [];

}
