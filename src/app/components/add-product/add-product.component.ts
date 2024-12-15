import { UtilityService } from './../../services/utility.service';
import { ProductForm } from './../../interfaces/product-form.interface';
import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule, NgForm  } from '@angular/forms';
import { AddProductService } from './add-product.service';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
  providers: [CurrencyPipe],
})
export class AddProductComponent {
  @Output() closeModalAddProductEvent = new EventEmitter<boolean>();

  // numeric price value
  price?: number | null;

  // price formatted according to the USD standard
  priceFormatted?: string | null;

  // toggle for showing the numeric input field
  showInputPrice: boolean = false;

  // indicates if the price input should be focused
  priceOnFocus: boolean = false;

  formIsSubmitted: boolean = false;

  constructor(
    private currencyPipe: CurrencyPipe,
    private renderer: Renderer2,
    private el: ElementRef,
    private addProductService: AddProductService,
    private utilityService: UtilityService
  ) {}

  // toggles between the numeric input and formatted text field.
  // when the input loses focus, formats the numeric value according to USD standards
  formatPrice(): void {
    this.showInputPrice = !this.showInputPrice;

    if (this.price) {
      this.price = parseFloat(this.price.toFixed(2));
      this.priceFormatted = this.currencyPipe.transform(
        this.price,
        'USD',
        'symbol',
        '1.2-2'
      );
    } else {
      this.priceFormatted = null;
    }

    this.priceOnFocus = true;
  }

  // set focus on the numeric input field after switching between input types
  setPriceFocus(): void {
    if (this.priceOnFocus) {
      let priceFormControlInput = this.el.nativeElement.querySelector(
        '#priceFormControlInput'
      );
      if (priceFormControlInput) {
        priceFormControlInput.focus();
      }
    }
    this.priceOnFocus = false;
  }

  addClassformElements(customClass: string): void {
    const formElements = this.el.nativeElement.querySelectorAll(
      'form input, form textarea'
    );
    formElements.forEach((element: HTMLElement) => {
      this.renderer.addClass(element, customClass);
    });
  }

  removeClassformElements(customClass: string): void {
    const formElements = this.el.nativeElement.querySelectorAll(
      'form input, form textarea'
    );
    formElements.forEach((element: HTMLElement) => {
      this.renderer.removeClass(element, customClass);
    });
  }

  async onSubmit(form: NgForm) {
    this.formIsSubmitted = true;

    if (form.valid) {
      const productData: ProductForm = {
        title: form.form.value.title || undefined,
        category: form.form.value.category || undefined,
        price: this.price || NaN,
        employee: (form.form.value.employeeFirstName + ' ' + form.form.value.employeeLastName).trim() || undefined,
        description: form.form.value.description || null,
        reviews: [],
      };

      console.log(productData);
      await this.addProductService.addProduct(productData);
      //this.closeModalAddProductEvent.emit(false);
      setTimeout(() => {
        this.utilityService.reloadLocation();
      }, 1000);

    } else {
      // apply CSS classes to clearly highlight missing fields, allowing the user to identify them quickly
      this.addClassformElements('submitted');
      this.addClassformElements('vibrate');
      setTimeout(() => {
        this.removeClassformElements('vibrate');
      }, 300);
    }
  }

  // lifecycle: ensures the price input field is focused after each view check
  ngAfterViewChecked(): void {
    this.setPriceFocus();
    if (this.formIsSubmitted) {
      this.addClassformElements('submitted');
    }
  }
}
