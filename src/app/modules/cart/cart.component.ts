import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/shared/interfaces/model.interface';
import { CartService } from './services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  productsCart$: Observable<Partial<CartProduct>[]> = this.cartService.getCart();
  total: number = 0;

  constructor(private readonly cartService: CartService) {}

  deleteProduct(product: Partial<CartProduct>) {
    this.cartService.deleteProduct(product.id!);
  }
}
