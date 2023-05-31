import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Cart, CartProduct } from 'src/app/shared/core/interfaces/model.interface';
import {
  LocalStorageService,
} from 'src/app/shared/core/services/localstorage.service';

@Injectable()
export class CartService {
  private cart: Cart = {};

  private cartSubj$ = new BehaviorSubject<{
    [id: number]: Partial<CartProduct>;
  }>(this.cart);
  private cart$ = this.cartSubj$
    .asObservable()
    .pipe(map(cart => this.mapToArray(cart)));

  constructor(private readonly localStorageService: LocalStorageService) {
    !this.localStorageService.exists('cart')
      ? this.persistCart(this.cart)
      : (() => {
          this.cart = JSON.parse(this.localStorageService.get('cart')!);
          this.cartSubj$.next(this.cart);
        })();
  }

  /**
   *
   * @param product
   */
  addProduct(product: CartProduct): void {
    !(product.id in this.cart)
      ? (this.cart[product.id] = { ...product, amount: 1 })
      : this.cart[product.id] &&
        (this.cart[product.id].amount = this.cart[product?.id].amount! + 1);

    // Throw persist
    this.persistCart(this.cart);
  }

  /**
   *
   * @param productId
   */
  deleteProduct(productId: number): void {
    this.cart[productId] && delete this.cart[productId];

    // Throw persist
    this.persistCart(this.cart);
  }

  /**
   *
   * @returns
   */
  getCart(): Observable<Partial<CartProduct>[]> {
    return this.cart$;
  }

  /**
   *
   * @param cart
   */
  private persistCart(cart: { [id: number]: Partial<CartProduct> }): void {
    this.localStorageService.save({
      key: 'cart',
      value: JSON.stringify(cart)
    });
    this.cartSubj$.next(this.cart);
  }

  /**
   *
   * @param obj
   */
  private mapToArray(obj: {
    [id: number]: Partial<CartProduct>;
  }): Partial<CartProduct>[] {
    return Object.values(obj).map(value => value);
  }
}
