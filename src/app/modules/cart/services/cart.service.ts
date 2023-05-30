import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { CartProduct } from 'src/app/shared/interfaces/model.interface';
import { LocalStorageService } from 'src/app/shared/services/localstorage.service';

@Injectable()
export class CartService {
  private cart: { [id: number]: Partial<CartProduct> } = {};

  private cartSubj$ = new BehaviorSubject<{
    [id: number]: Partial<CartProduct>;
  }>(this.cart);
  private cart$ = this.cartSubj$
    .asObservable()
    .pipe(map(cart => this.mapToArray(cart)));

  constructor(private readonly localStorageService: LocalStorageService) {
    this.localStorageService.add({
      key: 'cart',
      value: JSON.stringify(this.cart)
    });
    this.cartSubj$.next(this.cart);
  }

  /**
   *
   * @param product
   */
  addProduct(product: CartProduct): void {
    !this.cart[product.id]
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
    this.localStorageService.add({
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
