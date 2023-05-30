import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/model.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product!: Product;
  @Output() onSelectProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(selectedProduct: Product){
    this.onSelectProduct.emit(selectedProduct);
  }

}
