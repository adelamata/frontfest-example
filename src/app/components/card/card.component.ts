import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/core/interfaces/model.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product!: Product;
  @Output() onSelectProduct = new EventEmitter<Product>();

  imageLoaded = false;

  selectProduct(selectedProduct: Product) {
    this.onSelectProduct.emit(selectedProduct);
  }
}
