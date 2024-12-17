import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  Input,
  SimpleChanges,
} from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { LayoutType } from '../../enums/layout-type';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  @Input() products?: Product[] = [];
  @Input() layout?: LayoutType;

  currentPage = 1;
  itemsPerPage = 6;
  pages: number[] = [];

  ngOnInit(): void {
    this.calculatePages();
  }

  ngOnChanges(): void {
    if (this.products && this.products.length > 0) {
      this.calculatePages();
    }
  }

  ngDoCheck(): void {
    if (this.products && this.products.length > 0) {
      this.calculatePages();

      // if you are out of limit, reset first page
      const maxPage = Math.ceil(this.products.length / this.itemsPerPage);
      if (this.currentPage > maxPage) {
        this.currentPage = 1;
      }
    }
  }

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.pages.length) {
      this.currentPage = page;
    }
  }

  calculatePages(): void {
    if (this.products?.length) {
      const totalPages = Math.ceil(this.products.length / this.itemsPerPage);
      this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    }
  }

  paginatedProducts(): Product[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.products?.slice(startIndex, endIndex) || [];
  }
}
