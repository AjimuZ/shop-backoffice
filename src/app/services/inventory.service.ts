import { ProductForm } from './../interfaces/product-form.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';
import { StatsCategories } from '../interfaces/stats-categories.interface';
import { Store } from '../interfaces/store.interface';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://us-central1-test-b7665.cloudfunctions.net/api/stores';
  private storeId = 'ijpxNJLM732vm8AeajMR';

  constructor(private http: HttpClient) {}

  // retrieve the list of stores
  getStores(): Observable<Store[]> {
    return this.http.get<Store[]>(this.apiUrl);
  }

  // retrieve details of a specific store
  getStoreDetails(): Observable<Store> {
    return this.http.get<Store>(`${this.apiUrl}/${this.storeId}`);
  }

  // retrieve all products for a specific store
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/${this.storeId}/products`);
  }

  // add a new product
  addProduct(product: ProductForm): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/${this.storeId}/products`, product, { responseType: 'text' as 'json' });
  }

  // retrieve a specific product by id
  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${this.storeId}/products/${productId}`);
  }

  // delete a specific product by id
  deleteProduct(productId: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${this.storeId}/products/${productId}`);
  }

  // retrieve statistics for each category of products in a specific store
  getStatsCategories(): Observable<StatsCategories[]> {
    return this.http.get<StatsCategories[]>(`${this.apiUrl}/${this.storeId}/stats/categories`);
  }
}
