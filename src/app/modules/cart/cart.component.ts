import { Component, OnInit } from '@angular/core';
import { CartProduct } from 'src/app/shared/core/interfaces/model.interface';
import { CartService } from './services/cart.service';
import { Observable, of, withLatestFrom, map } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  productsCart$: Observable<
    Partial<CartProduct>[]
  > = this.cartService.getCart();

  productsCartTotal$ = this.productsCart$.pipe(
    map<Partial<CartProduct>[], number>(
      (productCarts: Partial<CartProduct>[]) =>
        productCarts.reduce(
          (acc, product) => acc + product.price! * product.amount!,
          0
        )
    )
  );

  constructor(private readonly cartService: CartService) {}

  deleteProduct(product: Partial<CartProduct>) {
    this.cartService.deleteProduct(product.id!);
  }
}
