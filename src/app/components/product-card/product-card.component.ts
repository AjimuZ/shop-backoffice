import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from '../reviews/reviews.component';
import { ProductCardService } from './product-card.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, ReviewsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product;

  constructor(
    private productCardService: ProductCardService,
    private utilityService: UtilityService
  ) {}

  ngOnInit(): void {}

  async onDelete() {
    if (this.product && this.product.id) {
      await this.productCardService.deleteProductById(this.product.id);
      setTimeout(() => {
        this.utilityService.reloadLocation();
      }, 1000);
    }
  }
}
