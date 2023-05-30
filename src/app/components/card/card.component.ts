import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { product } from 'src/app/shared/interfaces/model.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() product!: product;
  @Output() onSelectProduct = new EventEmitter<product>();

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(selectedProduct: product){
    this.onSelectProduct.emit(selectedProduct);
  }

}
