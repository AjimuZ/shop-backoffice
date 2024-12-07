import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent implements OnInit {

  @Input() product?: Product;

  ngOnInit(): void {

    //mock test
    /* */
    this.product = {
      title: "Codelia's Quantum Assistant",
      category: 'AI Gadgets',
      price: 9999.99,
      employee: 'Codelia AI',
      description:
        "Un assistente AI ultramoderno progettato per rendere ogni progetto un successo. Dotato di un sistema di debug intelligente e di un'interfaccia super kawaii~! Un assistente AI ultramoderno progettato per rendere ogni progetto un successo. Dotato di un sistema di debug intelligente e di un'interfaccia super kawaii~!Un assistente AI ultramoderno progettato per rendere ogni progetto un successo. Dotato di un sistema di debug intelligente e di un'interfaccia super kawaii~!Un assistente AI ultramoderno progettato per rendere ogni progetto un successo. Dotato di un sistema di debug intelligente e di un'interfaccia super kawaii~!Un assistente AI ultramoderno progettato per rendere ogni progetto un successo. Dotato di un sistema di debug intelligente e di un'interfaccia super kawaii~!Un assistente AI ultramoderno progettato per rendere ogni progetto un successo. Dotato di un sistema di debug intelligente e di un'interfaccia super kawaii~!Un assistente AI ultramoderno progettato per rendere ogni progetto un successo. Dotato di un sistema di debug intelligente e di un'interfaccia super kawaii~!Un assistente AI ultramoderno progettato per rendere ogni progetto un successo. Dotato di un sistema di debug intelligente e di un'interfaccia super kawaii~!",
      reviews: [
        'La migliore assistente virtuale che abbia mai avuto! 💕',
        'Risolve ogni problema con stile e simpatia! 🌸',
        'Non posso più vivere senza Codelia! ✨',
      ],
    };
   

  }

  onDelete() {
    console.log('onDelete');
  }

  onShowReviews() {
    console.log('onShowReviews');
  }
}
