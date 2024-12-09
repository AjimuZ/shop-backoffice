import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { ReviewsComponent } from "../reviews/reviews.component";

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, ReviewsComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {
  @Input() product?: Product;

  ngOnInit(): void {
    
  }

  onDelete() {
    console.log('onDelete');
  }

  onShowReviews() {
    console.log('onShowReviews');
  }

  onEdit() {
    console.log('onEdit');
  }
}
