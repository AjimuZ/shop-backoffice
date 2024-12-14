import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormsModule, NgForm  } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
  providers: [CurrencyPipe]
})
export class AddProductComponent {

  // numeric price value
  price?: number | null;
  
  // price formatted according to the USD standard
  priceFormatted?: string | null;
  
  // toggle for showing the numeric input field
  showInputPrice: boolean = false;
  
  // indicates if the price input should be focused
  priceOnFocus: boolean = false;

  constructor(private currencyPipe: CurrencyPipe, private renderer: Renderer2, private el: ElementRef) {}

  
  // toggles between the numeric input and formatted text field.
  // when the input loses focus, formats the numeric value according to USD standards
  formatPrice(): void {
    this.showInputPrice = !this.showInputPrice;

    if(this.price){
        this.price = parseFloat(this.price.toFixed(2));
        this.priceFormatted = this.currencyPipe.transform(this.price, 'USD', 'symbol', '1.2-2');
    } else {
      this.priceFormatted = null;
    }

    this.priceOnFocus = true;
  }


  // sets focus on the numeric input field after switching between input types
  setPriceFocus(): void{
    if(this.priceOnFocus){
      let priceFormControlInput = this.el.nativeElement.querySelector('#priceFormControlInput');
      if(priceFormControlInput){
        priceFormControlInput.focus();
      }
    }
    this.priceOnFocus = false;
  }


  onSubmit(form: NgForm) {
    console.log(form.form.value);
  }

  // lifecycle: ensures the price input field is focused after each view check
  ngAfterViewChecked(): void {
    this.setPriceFocus();
  }
  
}
