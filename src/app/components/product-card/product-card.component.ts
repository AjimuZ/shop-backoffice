import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ProductCardService } from './product-card.service';
import { LayoutType } from '../../enums/layout-type';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, ReviewsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product;
  @Input() layout?: LayoutType;

  constructor(private productCardService: ProductCardService) {}

  ngOnInit(): void {}

  async onDelete() {
    if (this.product && this.product.id) {
      this.productCardService.deleteProductById(this.product.id);
    }
  }
}
